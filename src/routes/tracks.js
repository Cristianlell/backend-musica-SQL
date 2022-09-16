const express = require('express');
const router = express.Router();
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracksControllers');
const adminAuthentication = require('../middleware/adminAuthentication');
const session = require('../middleware/authentication');
const { tracksCreateValidation, tracksIdValidation } = require('../validators/tracksValidation');

router.use(session);
/* GET users listing. */
router.get('/', getItems);
router.get('/:id', tracksIdValidation, getItem);

router.post('/', adminAuthentication, tracksCreateValidation, createItem);

router.put('/:id', adminAuthentication, tracksIdValidation, tracksCreateValidation, updateItem);

router.delete('/:id', adminAuthentication, tracksIdValidation, deleteItem);


/**
 * @swagger
 * components:
 *  schemas:
 *      Track:
 *          properties:
 *              name:
 *                  type: string
 *                  description: Nombre de la canción
 *              album:
 *                  type: string
 *                  description: Nombre de album
 *              cover:
 *                  type: string
 *                  description: Url de la imagen
 *              artist_name:
 *                  type: string
 *                  description: Nombre del artista
 *              artist_nickname:
 *                  type: string
 *                  description: Apodo del artista
 *              artist_nationality:
 *                  type: string
 *                  description: Nacionalidad del artista
 *              duration_start:
 *                  type: integer
 *                  description: Inicio de la canción
 *              duration_end:
 *                  type: integer
 *                  description: Fin de la canción
 *              mediaID:
 *                  type: integer
 *                  description: ID de la canción
 *          required:
 *              - name
 *              - album
 *              - cover
 *              - artist_name
 *              - artist_nickname
 *              - artist_nationality
 *              - duration_start
 *              - duration_end
 *              - mediaID
 *          example:    
 *                  name: Cristian
 *                  album: album
 *                  cover: http://tttt.com
 *                  artist_name: Cristian
 *                  artist_nickname: Cristian
 *                  artist_nationality: Argentina
 *                  duration_start: 0
 *                  duration_end: 3
 *                  mediaId: 1
 *              
 * 
 * 
 * 
 *  responses:

 *
 *      201:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                                  name: 
 *                                      type: string
 *                                  album:
 *                                      type: string
 *                                  cover:
 *                                      type: string
 *                                  artist_name:
 *                                      type: string
 *                                  artist_nickname:
 *                                      type: string
 *                                  artist_nationality:
 *                                      type: string
 *                                  duration_start:
 *                                      type: integer
 *                                  duration_end:
 *                                      type: integer
 *                                  mediaId:
 *                                      type: integer
 *                                  updatedAt:
 *                                      type: string
 *                                  createdAt:
 *                                      type: string
 *                      example:
 *                          success: true
 *                          message: CREATED
 *                          body:
 *                              name: Cristian
 *                              album: album
 *                              cover: http://tttt.com
 *                              artist_name: Cristian
 *                              artist_nickname: Cristian
 *                              artist_nationality: Argentina
 *                              duration_start: 0
 *                              duration_end: 3
 *                              mediaId: 1
 *                              updatedAt: 2022-09-12T15:26:48.000Z
 *                              createdAt: 2022-09-12T15:26:48.000Z
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
 * /api/tracks:
 *      post:
 *          security:
 *              - bearerAuth: []
 *          summary: Almacena un nuevo archivo
 *          tags: [Track]
 *          requestBody:
 *              required: true
 *              content:
 *                 application/json:
 *                   schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Track'
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
 * /api/tracks:
 *      get:
 *          security:
 *              - bearerAuth: []
 *          summary: Trae todas las canciones
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
 * /api/tracks/{id}:
 *      get:
 *          security:
 *              - bearerAuth: []
 *          summary: Trae detalle de una canción 
 *          tags: [Track]
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
 *                        schema:
 *                           type: object
 *                           properties:
 *                                  success:
 *                                     type: string
 *                                  message:
 *                                     type: string
 *                                  body:
 *                                      type: object
 *                                      properties:
 *                                          id:
 *                                              type: integer
 *                                          album:
 *                                              type: string
 *                                          cover:
 *                                              type: string
 *                                          artist_name:
 *                                              type: string
 *                                          artist_nickname:
 *                                              type: string
 *                                          artist_nationality:
 *                                              type: string
 *                                          duration_start:
 *                                              type: integer
 *                                          duration_end:
 *                                              type: integer
 *                                          mediaId:
 *                                              type: integer
 *                                          updatedAt:
 *                                              type: string
 *                                          createdAt:
 *                                              type: string
 *                                          deletedAt:
 *                                              type: string
 *                                          track:
 *                                              type: object
 *                                              properties:
 *                                                  id: 
 *                                                      type: integer
 *                                                  filename: 
 *                                                      type: integer
 *                                                  url: 
 *                                                       type: string
 *                                                  updatedAt: 
 *                                                       type: string
 *                                                  createdAt: 
 *                                                       type: string
 *                                                  deletedAt: 
 *                                                       type: string 
 *                           example:    
 *                               success: true
 *                               message: OK
 *                               body:
 *                                   id: 1
 *                                   album: Album
 *                                   cover: http://tttt.com
 *                                   artist_name: Cristian
 *                                   artist_nickname: Cristian
 *                                   artist_nationality: Argentina
 *                                   duration_start: 0
 *                                   duration_end: 3
 *                                   mediaId: 1
 *                                   updatedAt: 2022-09-12T15:26:48.000Z
 *                                   createdAt: 2022-09-12T15:26:48.000Z
 *                                   deletedAt: null
 *                                   track:
 *                                      id: 1
 *                                      filename: file-1663169060339.mp3
 *                                      url: https://test-backend-musica.s3.sa-east-2.amazonaws.com/file-1663273728139.mp3
 *                                      updatedAt: 2022-09-14T15:24:20.614Z
 *                                      createdAt: 2022-09-14T15:24:20.614Z
 *                                      deletedAt: null
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
 * /api/tracks/{id}:
 *      put:
 *          security:
 *              - bearerAuth: []
 *          summary: Actualiza una canción
 *          tags: [Track]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: integer
 *                  required: true
 *          requestBody: 
 *              required: true
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Track'
 *          responses:
 *              201:
 *                 description: CREATED
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
 * /api/tracks/{id}:
 *      delete:
 *          security:
 *              - bearerAuth: []
 *          summary: Elimina una canción
 *          tags: [Track]
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
