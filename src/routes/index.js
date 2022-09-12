const express = require('express');
const router = express.Router();
const fs = require('fs');
const removeExtension = require('../helpers/removeExtension');

const pathRouter = __dirname;

// Trae las rutas dinámicamente
fs.readdirSync(pathRouter).filter((file) => {
  const routes = removeExtension(file);
  if (routes !== "index") {
    router.use(`/${routes}`, require(`./${file}`))
  }
})
router.get('*', (req, res, next) => {
  res.status(404).send({ err: "not found" })
})

module.exports = router;
