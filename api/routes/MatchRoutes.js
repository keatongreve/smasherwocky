var express = require('express');
var router = express.Router();
var MatchApiController = require('../controllers/MatchApiController.js');

router.get('/', MatchApiController.list);
router.get('/:id', MatchApiController.show);
router.post('/', MatchApiController.create);
router.put('/:id', MatchApiController.update);
router.delete('/:id', MatchApiController.remove);

module.exports = router;
