const mongoose = require("mongoose");
const { Schema } = mongoose;
const AgenciaSchema = new Schema({
  monedaOrigen: { type: String, required: true },
  cantidadOrigen: { type: Number, required: true },
  monedaDestino: { type: String, required: true },
  cantidadDestino: { type: Number, required: true },
  emailCliente: { type: String, required: true },
});
module.exports =
  mongoose.models.Agencia || mongoose.model("Agencia", AgenciaSchema);
