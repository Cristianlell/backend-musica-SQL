const express = require("express");
const router = express.Router();
const {
    createItem,
    getItems,
    getItem,
    deleteItem,
} = require("../controllers/storageControllers");
const session = require("../middleware/authentication");
const adminAuthentication = require("../middleware/adminAuthentication");
const upload = require("../middleware/upload");
const { storageIdValidation } = require("../validators/storageValidation");
/* GET users listing. */
router.use(session);

router.get("/", getItems);
router.get("/:id", storageIdValidation, getItem);
router.post("/", upload.single("file"), adminAuthentication, createItem);
router.delete("/:id", storageIdValidation, adminAuthentication, deleteItem);

/**
 * @swagger
 * components:
 *  schemas:
 *      Storage:
 *          properties:
 *              file:
 *                  type: string
 *                  format: binary
 *                  description: archivo multimedia
 *          required:
 *              - file
 *  responses:
 *      200:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          success:
 *                              type: string
 *                          message:
 *                              type: string
 *                          body:
 *                              type: object
 *                              properties:
 *                                  id:
 *                                      type: integer
 *                                  url:
 *                                      type: string
 *                                  filename:
 *                                      type: string
 *                                  updatedAt:
 *                                      type: string
 *                                  createdAt:
 *                                      type: string
 *                                  deletedAt:
 *                                      type: string
 *                      example:
 *                          success: true
 *                          message: OK
 *                          body:
 *                               id: 1
 *                               filename: file-1663169060339.mp3
 *                               url: https://test-backend-musica.s3.sa-east-2.amazonaws.com/file-1663273728139.mp3
 *                               updatedAt: 2022-09-14T15:24:20.614Z
 *                               createdAt: 2022-09-14T15:24:20.614Z
 *                               deletedAt: null
 *
 *      201:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          success:
 *                              type: string
 *                          message:
 *                              type: string
 *                          body:
 *                              type: object
 *                              properties:
 *                                  id:
 *                                      type: integer
 *                                  url:
 *                                      type: string
 *                                  filename:
 *                                      type: string
 *                                  updatedAt:
 *                                      type: string
 *                                  createdAt:
 *                                      type: string
 *                      example:
 *                          success: true
 *                          message: CREATED
 *                          body:
 *                               id: 1
 *                               filename: file-1663169060339.mp3
 *                               url: https://test-backend-musica.s3.sa-east-2.amazonaws.com/file-1663273728139.mp3
 *                               updatedAt: 2022-09-14T15:24:20.614Z
 *                               createdAt: 2022-09-14T15:24:20.614Z
 *
 *      400:
 *          description: BAD REQUEST
 *      401:
 *          description: UNAUTHORIZED
 *      403:
 *          description: FORBIDDEN
 *      404:
 *          description: NOT FOUND
 *      500:
 *          description: INTERNAL SERVER ERROR
 *
 */

/**
 * @swagger
 * /api/storage:
 *      post:
 *          security:
 *              - bearerAuth: []
 *          summary: Almacena un nuevo archivo
 *          tags: [Storage]
 *          requestBody:
 *              required: true
 *              content:
 *                 multipart/form-data:
 *                   schema:
 *                      type: object
 *                      properties:
 *                          file:
 *                              type: string
 *                              format: binary
 *                              description: archivo multimedia
 *          responses:
 *              201:
 *                  $ref: '#/components/responses/201'
 *              400:
 *                  $ref: '#/components/responses/400'
 *              401:
 *                  $ref: '#/components/responses/401'
 *              403:
 *                  $ref: '#/components/responses/403'
 *              500:
 *                  $ref: '#/components/responses/500'
 */

/**
 * @swagger
 * /api/storage:
 *      get:
 *          security:
 *              - bearerAuth: []
 *          summary: Trae todos los archivos almacenados
 *          tags: [Storage]
 *          responses:
 *              200:
 *                  description: OK. Retorna un array de objetos
 *              400:
 *                  $ref: '#/components/responses/400'
 *              401:
 *                  $ref: '#/components/responses/401'
 *              500:
 *                  $ref: '#/components/responses/500'
 */

/**
 * @swagger
 * /api/storage/{id}:
 *      get:
 *          security:
 *              - bearerAuth: []
 *          summary: Trae detalle de un archivo almacenado
 *          tags: [Storage]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: integer
 *                required: true
 *          responses:
 *              200:
 *                  $ref: '#/components/responses/200'
 *              400:
 *                  $ref: '#/components/responses/400'
 *              401:
 *                  $ref: '#/components/responses/401'
 *              404:
 *                  $ref: '#/components/responses/404'
 *              500:
 *                  $ref: '#/components/responses/500'
 */
/**
 * @swagger
 * /api/storage/{id}:
 *      delete:
 *          security:
 *              - bearerAuth: []
 *          summary: Elimina un archivo almacenado
 *          tags: [Storage]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: integer
 *                required: true
 *          responses:
 *              200:
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
 *                              example:
 *                                  success: true
 *                                  message: OK
 *                                  body: 1
 *              400:
 *                  $ref: '#/components/responses/400'
 *              401:
 *                  $ref: '#/components/responses/401'
 *              403:
 *                  $ref: '#/components/responses/403'
 *              404:
 *                  $ref: '#/components/responses/404'
 *              500:
 *                  $ref: '#/components/responses/500'
 */

module.exports = router;
