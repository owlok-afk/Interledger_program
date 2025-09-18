// index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import {
  createAuthenticatedClient,
  OpenPaymentsClientError,
  isFinalizedGrant,
} from "@interledger/open-payments";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Variables de entorno
const KEY_ID = process.env.KEY_ID;
const PRIVATE_KEY_PATH = process.env.PRIVATE_KEY_PATH || "./private.key";
const SENDER_WALLET_URL = process.env.SENDER;
const RECEIVER_WALLET_URL = process.env.RECEIVER;

// Usuario y contraseña
const USER = process.env.USER;
const PASS = process.env.PASS;

// Validaciones iniciales
if (!KEY_ID || !SENDER_WALLET_URL || !RECEIVER_WALLET_URL) {
  console.error("❌ Falta configurar .env -> KEY_ID, SENDER o RECEIVER.");
  process.exit(1);
}

const absoluteKeyPath = path.resolve(process.cwd(), PRIVATE_KEY_PATH);
if (!fs.existsSync(absoluteKeyPath)) {
  console.error(`❌ No se encontró private key en: ${absoluteKeyPath}`);
  process.exit(1);
}
const privateKeyPem = fs.readFileSync(absoluteKeyPath, "utf8");

console.log("✅ Backend arrancando con:");
console.log("   KEY_ID:", KEY_ID);
console.log("   SENDER:", SENDER_WALLET_URL);
console.log("   RECEIVER:", RECEIVER_WALLET_URL);

// Rutas
app.get("/", (req, res) => {
  res.send("🚀 Backend Open Payments activo! Usa POST /pago para iniciar pagos.");
});

// Login simple
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER && password === PASS) {
    return res.json({ success: true });
  } else {
    return res.status(401).json({ success: false });
  }
});

let lastOutgoingGrant = null;

// Crear pago
app.post("/pago", async (req, res) => {
  try {
    const monto = req.body.amount ? req.body.amount.toString() : "1000";

    const client = await createAuthenticatedClient({
      walletAddressUrl: SENDER_WALLET_URL,
      privateKey: privateKeyPem,
      keyId: KEY_ID,
    });

    const sendingWallet = await client.walletAddress.get({ url: SENDER_WALLET_URL });
    const receivingWallet = await client.walletAddress.get({ url: RECEIVER_WALLET_URL });

    const incomingPaymentGrant = await client.grant.request(
      { url: receivingWallet.authServer },
      { access_token: { access: [{ type: "incoming-payment", actions: ["read", "create", "complete"] }] } }
    );

    const incomingPayment = await client.incomingPayment.create(
      { url: receivingWallet.resourceServer, accessToken: incomingPaymentGrant.access_token.value },
      {
        walletAddress: receivingWallet.id,
        incomingAmount: {
          assetCode: receivingWallet.assetCode,
          assetScale: receivingWallet.assetScale,
          value: monto,
        },
      }
    );

    const quoteGrant = await client.grant.request(
      { url: sendingWallet.authServer },
      { access_token: { access: [{ type: "quote", actions: ["read", "create"] }] } }
    );

    const quote = await client.quote.create(
      { url: sendingWallet.resourceServer, accessToken: quoteGrant.access_token.value },
      { walletAddress: sendingWallet.id, receiver: incomingPayment.id, method: "ilp" }
    );

    const outgoingPaymentGrant = await client.grant.request(
      { url: sendingWallet.authServer },
      {
        access_token: {
          access: [
            {
              type: "outgoing-payment",
              actions: ["read", "create"],
              limits: {
                debitAmount: {
                  assetCode: quote.debitAmount.assetCode,
                  assetScale: quote.debitAmount.assetScale,
                  value: quote.debitAmount.value,
                },
              },
              identifier: sendingWallet.id,
            },
          ],
        },
        interact: { start: ["redirect"] },
      }
    );

    lastOutgoingGrant = { client, outgoingPaymentGrant, sendingWallet, quote };

    console.log("🔗 URL de interacción:", outgoingPaymentGrant.interact.redirect);

    res.json({
      message: "Grant interactivo generado. Abre la URL para aceptar el pago",
      url: outgoingPaymentGrant.interact.redirect,
    });
  } catch (err) {
    console.error("❌ Error en /pago:", err);
    if (err instanceof OpenPaymentsClientError) res.status(400).json({ error: err.description || String(err) });
    else res.status(500).json({ error: err.message || String(err) });
  }
});

// Finalizar pago
app.post("/finalizar-pago", async (req, res) => {
  try {
    if (!lastOutgoingGrant) return res.status(400).json({ error: "No hay grant pendiente" });

    const { client, outgoingPaymentGrant, sendingWallet, quote } = lastOutgoingGrant;

    const finalizedGrant = await client.grant.continue({
      url: outgoingPaymentGrant.continue.uri,
      accessToken: outgoingPaymentGrant.continue.access_token.value,
    });

    if (!isFinalizedGrant(finalizedGrant)) {
      return res.status(400).json({ error: "Grant no finalizado. Acepta la interacción en el navegador." });
    }

    const outgoingPayment = await client.outgoingPayment.create(
      { url: sendingWallet.resourceServer, accessToken: finalizedGrant.access_token.value },
      { walletAddress: sendingWallet.id, quoteId: quote.id }
    );

    lastOutgoingGrant = null;
    res.json({ message: "✅ Pago realizado correctamente", outgoingPayment });
  } catch (err) {
    console.error("❌ Error en /finalizar-pago:", err);
    if (err instanceof OpenPaymentsClientError) res.status(400).json({ error: err.description || String(err) });
    else res.status(500).json({ error: err.message || String(err) });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor Open Payments corriendo en http://localhost:${PORT}`);
});
