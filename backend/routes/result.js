const express = require('express');

const resultCtrl = require('../controllers/result');




const router = express.Router();

router.get('/getRaw', resultCtrl.getRaw);
router.get('/getAll', resultCtrl.getAll);
router.get('/getDay/:day', resultCtrl.getDay);

module.exports = router;