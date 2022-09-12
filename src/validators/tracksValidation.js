const { check } = require("express-validator");
const validationHelper = require("../helpers/validationHelper");

const tracksCreateValidation = [
     check("name").exists().notEmpty().isString(),
     check("album").exists().notEmpty().isString(),
     check("cover").exists().notEmpty().isString(),
     check("artist_name").exists().notEmpty().isString(),
     check("artist_nickname").exists().notEmpty().isString(),
     check("artist_nationality").exists().notEmpty().isString(),
     check("duration_start").exists().notEmpty().isNumeric(),
     check("duration_end").exists().notEmpty().isNumeric(),
     check("mediaId").exists().notEmpty(),
     (req, res, next) => validationHelper(req, res, next)
]

const tracksIdValidation = [
     check("id").exists().notEmpty(),
     (req, res, next) => validationHelper(req, res, next)
]


module.exports = {tracksCreateValidation,tracksIdValidation};