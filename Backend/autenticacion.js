const express = require('express');

const autenticacion = express.Router();

autenticacion.get('/acceso', (req, res) => {
    res.json({msg: "Funciona mi backend desde la ruta api/acceso"});
})


module.exports = autenticacion;