# Pago seguro artesanal con Interledger  

![imagen](logo.png)  

## ¿Cuál es el problema?  
Muchos artesanos tienen dificultades para recibir pagos seguros y confiables por sus productos. Los clientes suelen mostrarse reacios a pagar por adelantado y los métodos tradicionales como transferencias bancarias, efectivo o pagos móviles locales pueden ser lentos, costosos, inseguros o poco interoperables.  

Esto genera desconfianza mutua, retrasos en la entrega y en algunos casos pérdida de ventas. Además, los artesanos carecen de herramientas digitales que les permitan formalizar sus transacciones, emitir comprobantes y llevar un registro confiable de los pagos, limitando así su profesionalización, expansión y capacidad de competir en un mercado más amplio, incluso internacional.  

## ¿Qué tecnología usarán?  
La solución se construirá sobre tecnologías modernas y seguras:  
- **Node.js**: Para la lógica del backend y la integración directa con la API de Open Payments de Interledger.  
- **React.js**: Framework de frontend para crear una interfaz intuitiva, adaptable y fácil de usar.  
- **Vite**: Herramienta de desarrollo que acelera la compilación y despliegue de la aplicación web.  
- **API Open Payments (Interledger)**: Núcleo de la solución para procesar pagos de manera rápida, segura, sin retenciones y con alcance global.  

## ¿Cuál es la solución?  
Se propone desarrollar una **aplicación web** que permita a los artesanos recibir pagos digitales de forma segura y directa. El cliente podrá elegir al artesano, el producto, ingresar la cantidad y procesar el pago en segundos.  

- Aumenta la confianza entre clientes y artesanos.  
- Reduce riesgos de impago o fraudes.  
- Permite registrar y formalizar todas las transacciones.  
- Conecta a los artesanos con un mercado más amplio, incluyendo clientes nacionales e internacionales.  

## ¿Cuáles son los beneficios?  
- **Seguridad**: Pagos directos y trazables sin retenciones.  
- **Crecimiento del negocio**: Incremento en clientes y ventas.  
- **Eficiencia**: Pagos instantáneos con menos costos de operación.  
- **Expansión**: Oportunidad de abrirse a mercados globales.  
- **Formalización**: Comprobantes y registros de pagos accesibles.  
- **Mejor experiencia del cliente**: Simplicidad y rapidez en el proceso de compra.  

## ¿Cuál es la arquitectura/stack simple?  
1. **Login y autenticación**: Validación de usuarios (artesanos y clientes).  
2. **Inicio**: Catálogo de artesanos con sus productos.  
3. **Página de pago**: Seleccionar destinatario, monto y procesar pago seguro vía Interledger.  
4. **Confirmación**: Liberación del pago.

## ¿Qué funciones son indispensables? ¿Quién será responsable de construir qué parte?  
### Funciones indispensables  
- Conexión segura con la API de Open Payments.  
- Autenticación de llaves de acceso y validación de pagos.   

### Responsabilidades del equipo  
- **Frontend Developer**: Construcción de la interfaz web en React.js, usabilidad y diseño adaptativo.  
- **Backend Developer**: Manejo de usuarios, integración con la API Interledger y lógica de pagos.  
- **UX/UI Designer**: Definición del flujo de pago simple y atractivo para los usuarios.  
- **Project Manager**: Coordinación del equipo, tiempos y entregables.  
