const Agencia = require("../models/agencia");
const AgenciaCtrl = {};

AgenciaCtrl.getTransaccion = async (req, res) => {
  var transacciones = await Agencia.find();
  res.json(transacciones);
};
AgenciaCtrl.createTransaccion = async (req, res) => {
  var transaccion = new Agencia(req.body);
  try {
    await transaccion.save();
    res.json({
      status: "1",
      msg: "Transaccion guardado.",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};

AgenciaCtrl.getTransaccionesEmail = async (req, res) => {
  const transaccion = await Agencia.find({ emailCliente: req.params.email });
  res.json(transaccion);
};

AgenciaCtrl.getTransaccionesMoneda = async (req, res) => {
  const transaccion = await Agencia.find({
    monedaOrigen: req.params.origen,
    monedaDestino: req.params.destino,
  });
  res.json(transaccion);
};

module.exports = AgenciaCtrl;
