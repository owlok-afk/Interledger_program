# User Manual - Secure Artisan Payment with Interledger

## 1. Open the folder in Visual Studio Code
![VSCode](imagenes/vscode.png)

## 2. Enter the backend folder
```bash
cd .\backend\
```
![Backend](imagenes/backend.png)

## 3. Install Express
```bash
npm install express
```
![Express](imagenes/express.png)

## 4. Open a new terminal and go to the frontend folder
```bash
cd .\frontend\
```
![Frontend](imagenes/frontend.png)

## 5. Install Vite
```bash
npm install vite
```
![Vite](imagenes/vite.png)

## 6. Configure environment variables  
From the VSCode file explorer, open the `.env` file.

![Env](imagenes/env.png)

## 7. Modify authentication data  
Update the following values: `KEY_ID`, `SENDER`, `RECEIVER` with the credentials from your own wallet for authentication.

![Wallet Data](imagenes/wallet.png)

## 8. Replace the private key  
Locate the `private.key` file and replace the private key with the one from your wallet.

![Private Key](imagenes/Private_key.png)

## 9. Go back to the backend terminal  

## 10. Run the backend services
```bash
node .\index.js
```
![Index](imagenes/index.png)

## 11. Open the frontend terminal  

## 12. Run the frontend services
```bash
npm run dev
```
![Run Dev](imagenes/run_dev.png)

## 13. Access the web application  
The terminal will display the web page link `http://localhost:5173/`. Open the link.

![Main](imagenes/main.png)

## 14. Log in  
Log into the web page with the following credentials:
- **User:** alex.g.g5387@gmail.com  
- **Password:** alex1010A_

## 15. Make a purchase  
Browse the website, purchase a product, and send an incentive.

![Homepage](imagenes/login.png)

## 16. Validate the payment  
Validate the payment, return to the page, and confirm the payment.
