const express = require("express");
const router = express.Router();
const {
    validatorRegister,
    validatorLogin,
} = require("../validators/authValidation");
const { register, login } = require("../controllers/authControllers");

/* /api/auth */
router.post("/register", validatorRegister, register);
router.post("/login", validatorLogin, login);

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          properties:
 *              name:
 *                  type: string
 *                  description: nombre del usuario
 *              age:
 *                  type: integer
 *                  description: edad del usuario
 *              password:
 *                  type: string
 *                  description: contraseña del usuario
 *              email:
 *                  type: string
 *                  description: email del usuario
 *          required:
 *              - name
 *              - email
 *              - password
 *              - age
 *          example:
 *              name: Cristian  Lell
 *              age: 28
 *              email: admin@admin.com
 *              password: admin
 */

/**
 * @swagger
 * /api/auth/register:
 *      post:
 *          summary: Crea un nuevo usuario
 *          tags: [User]
 *          requestBody:
 *              required: true
 *              content:
 *                 application/json:
 *                   schema:
 *                      type: object
 *                      $ref: '#/components/schemas/User'
 *          responses:
  *              201:
 *                  description: OK
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  success:
 *                                      type: string
 *                                  message:
 *                                      type: string
 *                                  body:
 *                                      type: object
 *                                      properties:
 *                                          name:
 *                                              type: string
 *                                          email:
 *                                              type: string
 *                                          age:
 *                                              type: integer
 *                                          role:
 *                                              type: string
 *                                          id:
 *                                              type: integer
 *                                          token:
 *                                              type: string
 *                              example:
 *                                  success: true
 *                                  message: OK
 *                                  body:
 *                                       name: Cristian Lell
 *                                       email: admin@admin.com
 *                                       role: admin
 *                                       id: 2
 *                                       token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInJvbGUiOiJhZG1pbiIsImlkIjoyLCJpYXQiOjE2NjMwODU0MjUsI*mV4cCI6MTY2MzA5OTgyNX0.dlDqfE9pfrW6mqAZkCoUaYAC4TRe1pUtc1Wi2Sh9r-c

 *              400:
 *                  description: BAD REQUEST
 *              500:
 *                  description: INTERNAL SERVER ERROR
 */


/**
 * @swagger
 * /api/auth/login:
 *      post:
 *          summary: Inicia sesión un usuario
 *          tags: [User]
 *          requestBody:
 *              required: true
 *              content:
 *                 application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              email:
 *                                  type: string
 *                                  required: true
 *                              password:
 *                                   type:string
 *                                    required:true
 *                          example:
 *                              email: admin@admin.com
 *                              password: admin
 *
 *
 *          responses:
 *              200:
 *                  description: OK
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  success:
 *                                      type: string
 *                                  message:
 *                                      type: string
 *                                  body:
 *                                      type: object
 *                                      properties:
 *                                          name:
 *                                              type: string
 *                                          email:
 *                                              type: string
 *                                          age:
 *                                              type: integer
 *                                          role:
 *                                              type: string
 *                                          id:
 *                                              type: integer
 *                                          token:
 *                                              type: string
 *                              example:
 *                                  success: true
 *                                  message: OK
 *                                  body:
 *                                       name: Cristian Lell
 *                                       email: admin@admin.com
 *                                       role: admin
 *                                       id: 2
 *                                       token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInJvbGUiOiJhZG1pbiIsImlkIjoyLCJpYXQiOjE2NjMwODU0MjUsI*mV4cCI6MTY2MzA5OTgyNX0.dlDqfE9pfrW6mqAZkCoUaYAC4TRe1pUtc1Wi2Sh9r-c
 *
 *              400:
 *                  description: BAD REQUEST
 *              500:
 *                  description: INTERNAL SERVER ERROR
 */

module.exports = router;
