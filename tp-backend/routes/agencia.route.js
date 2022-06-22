//defino controlador para el manejo de CRUD
const agenciaCtrl = require("./../controlles/agencia.controller");
//creamos el manejador de rutas
const express = require("express");
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get("/", agenciaCtrl.getTransaccion);
router.post("/", agenciaCtrl.createTransaccion);
router.get("/:email", agenciaCtrl.getTransaccionesEmail);
router.get(
  "/origen/:origen/destino/:destino",
  agenciaCtrl.getTransaccionesMoneda
);

//exportamos el modulo de rutas
module.exports = router;
