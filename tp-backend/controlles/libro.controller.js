const Libro = require("../models/libro");
const libroCtrl = {};

libroCtrl.getLibro = async (req, res) => {
  const { query } = req;

  if (query.hasOwnProperty("destacado")) {
    const destacado = query["destacado"];
    console.log(destacado);
    const librosDestacados = await Libro.find({
      destacado: destacado,
    });
    return res.json(librosDestacados);
  }

  var libros = await Libro.find();
  console.log(libros);
  res.json(libros);
};
libroCtrl.createLibro = async (req, res) => {
  var libro = new Libro(req.body);
  try {
    await libro.save();
    res.json({
      status: "1",
      msg: "Libro guardado.",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};
libroCtrl.getLibroId = async (req, res) => {
  const libro = await Libro.findById(req.params.id);
  res.json(libro);
};
libroCtrl.editLibro = async (req, res) => {
  try {
    await Libro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({
      status: "1",
      msg: "Libro updated",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};
libroCtrl.deleteLibro = async (req, res) => {
  try {
    await Libro.deleteOne({ _id: req.params.id });
    res.json({
      status: "1",
      msg: "Agente removed",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};

module.exports = libroCtrl;
