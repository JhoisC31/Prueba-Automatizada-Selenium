const fs = require('fs');
const path = require('path');

const carpetaReporte = path.join(__dirname, 'reporte');
const rutaHTML = path.join(carpetaReporte, 'reporte.html');

const html = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Reporte de Prueba - Counter</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background: #f8f8f8; }
        h1 { color: #333; }
        .captura { margin: 20px 0; }
        .captura img { max-width: 100%; border: 1px solid #ccc; border-radius: 8px; }
        .caption { font-weight: bold; margin-top: 5px; }
    </style>
</head>
<body>
    <h1>Reporte de Prueba Automatizada - Counter</h1>

    <div class="captura">
        <div class="caption">✅ Estado tras incrementar hasta 10</div>
        <img src="../capture/incremented_to_10.png" alt="Incrementado a 10">
    </div>

    <div class="captura">
        <div class="caption">✅ Estado tras decrementar hasta -5</div>
        <img src="../capture/decremented_to_minus_5.png" alt="Decrementado a -5">
    </div>

    <p>🕒 Fecha de ejecución: ${new Date().toLocaleString()}</p>
</body>
</html>
`;

fs.writeFileSync(rutaHTML, html);
console.log('✅ Reporte generado');