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


module.exports = router;
