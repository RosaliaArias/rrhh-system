const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const candidateRoutes = require("./routes/candidates");
const docRoutes = require("./routes/docs");
const jobRoutes = require("./routes/jobs");

const app = express();
mongoose
  .connect(
    // descomentar si se desea probar con la base de datos virgen (local)
    "mongodb://localhost:27017/rrhh",
    // "mongodb+srv://admin:admin@cluster0.ixgib.azure.mongodb.net/rrhhSystem?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Connection failed!");
    console.log(err);
  });

// Configuración de Middlewares y rutas
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/Docs", express.static(path.join(__dirname, "Docs")));

// Configuración de rutas de las entidades
app.use("/api/candidates", candidateRoutes);
app.use("/api/docs", docRoutes);
app.use("/api/jobs", jobRoutes);

module.exports = app;
