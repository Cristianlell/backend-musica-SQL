const express = require('express');
const router = express.Router();
const { createItem, getItems, getItem, deleteItem } = require('../controllers/storageControllers');
const session = require('../middleware/authentication');
const adminAuthentication = require('../middleware/adminAuthentication');
const upload = require('../middleware/upload');
const { storageIdValidation } = require('../validators/storageValidation')
/* GET users listing. */
router.use(session);

router.get('/', getItems);
router.get('/:id', storageIdValidation, getItem);
router.post('/', upload.single('file'),adminAuthentication, createItem);
router.delete('/:id', storageIdValidation, adminAuthentication,deleteItem);


module.exports = router;
