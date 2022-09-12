const { check } = require("express-validator");
const validationHelper = require("../helpers/validationHelper");

const storageIdValidation = [
     check("id").exists().notEmpty(),
     (req, res, next) => validationHelper(req, res, next)
]

module.exports = {storageIdValidation};