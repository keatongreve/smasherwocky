var express = require('express');
var router = express.Router();
var UserApiController = require('../controllers/UserApiController.js');

router.get('/', UserApiController.list);
router.get('/:id', UserApiController.show);
router.post('/', UserApiController.create);
router.put('/:id', UserApiController.update);
router.delete('/:id', UserApiController.remove);

module.exports = router;
