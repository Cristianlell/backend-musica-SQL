require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const morganBody = require("morgan-body");
const { errorHandler } = require("./helpers/errorHandler");
const loggerStream = require("./services/slackService");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.static("storage"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());


//swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = require("./config/swagger");
app.use('/api/doc',swaggerUI.serve,swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

//Ejecutar antes de las rutas
morganBody(app, {
    noColors: true,
    stream: loggerStream,
    skip: function (req, res) {
        return res.statusCode < 400;
    },
});

app.use("/api", require("./routes"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    errorHandler(err, req, res);
});

module.exports = app;
