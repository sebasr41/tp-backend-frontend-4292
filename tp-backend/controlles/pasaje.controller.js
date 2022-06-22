const Pasaje = require("../models/pasaje");
const pasajeCtrl = {};

pasajeCtrl.getPasaje = async (req, res) => {
  var pasajeros = await Pasaje.find().populate("pasajero");
  res.json(pasajeros);
};
pasajeCtrl.createPasaje = async (req, res) => {
  var pasaje = new Pasaje(req.body);
  try {
    await pasaje.save();
    res.json({
      status: "1",
      msg: "Pasajero guardado.",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};
pasajeCtrl.getPasajeCategoria = async (req, res) => {
  const pasaje = await Pasaje.find({ categoriaPasajero: req.params.categoria });
  res.json(pasaje);
};
pasajeCtrl.editPasaje = async (req, res) => {
  try {
    await Pasaje.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      status: "1",
      msg: "Pasaje updated",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};
pasajeCtrl.deletePasaje = async (req, res) => {
  try {
    await Pasaje.deleteOne({ _id: req.params.id });
    res.json({
      status: "1",
      msg: "Pasaje removed",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};

pasajeCtrl.getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const passage = await Pasaje.findById(id);
    return res.json(passage);
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};

module.exports = pasajeCtrl;
