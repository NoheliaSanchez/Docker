
const express = require('express');
const connectDB = require('./db');

const TextDecoderFatal = new (require('util').TextDecoder)('utf8', { fatal: true });

const app = express();
const PORT = 3000;

// Conectar a la BD
connectDB();

app.get('/', (req, res) => {
    res.send('Hola, mi nombre es Nohelia Sánchez de la Materia de Contenedores, esto es una prueba de la Actividad solicitada');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
