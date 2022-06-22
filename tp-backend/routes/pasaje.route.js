//defino controlador para el manejo de CRUD
const pasajeCtrl = require("./../controlles/pasaje.controller");
//creamos el manejador de rutas
const express = require("express");
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get("/", pasajeCtrl.getPasaje);
router.get("/:id", pasajeCtrl.getOne);
router.post("/", pasajeCtrl.createPasaje);
router.get("/categoria/:categoria", pasajeCtrl.getPasajeCategoria);
router.delete("/:id", pasajeCtrl.deletePasaje);
router.put("/:id", pasajeCtrl.editPasaje);
//exportamos el modulo de rutas
module.exports = router;
