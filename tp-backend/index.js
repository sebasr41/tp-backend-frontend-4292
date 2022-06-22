const express = require("express");
const cors = require("cors");
const { mongoose } = require("./database");
var app = express();
//middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));
//Cargamos el modulo de direccionamiento de rutas
app.use("/api/libro", require("./routes/libro.route.js"));
app.use("/api/agencia", require("./routes/agencia.route.js"));
app.use("/api/persona", require("./routes/persona.route.js"));
app.use("/api/pasaje", require("./routes/pasaje.route.js"));
//setting
app.set("port", process.env.PORT || 3000);
//starting the server
app.listen(app.get("port"), () => {
  console.log(`Server started on port jeje`, app.get("port"));
});