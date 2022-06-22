//defino controlador para el manejo de CRUD
const personaCtrl = require("./../controlles/persona.controller");
//creamos el manejador de rutas
const express = require("express");
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get("/", personaCtrl.getPersona);
router.post("/", personaCtrl.createPersona);
router.get("/:documento", personaCtrl.getPersonaDni);
//exportamos el modulo de rutas
module.exports = router;
