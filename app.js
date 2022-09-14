require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const db = require("./database");
const dotenv = require("dotenv");
const routes = require("./routes");
const { swaggerUi, specs } = require("./swagger/swagger");
// const errorCodes = require("./codes/errorCodes");
const errorHandler = require("./errorHandler/errorHandler");
dotenv.config();

const app = express();
app.set("port", process.env.PORT);

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced database.");
  })
  .catch((err) => {
    console.log("Failed to sync database: " + err.message);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan("dev"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use(routes);
app.use((req, res) => {
  res.status(404).json({ message: "page is not found" });
});
app.use(errorHandler);

module.exports = app;
