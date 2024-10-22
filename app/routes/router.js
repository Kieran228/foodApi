//todo IMPORT EXPRESS PACKAGE
const express = require('express');




const router = express.Router();


router.use('/food', require('./api/app/routes/itemallergenroutes'));

router.use('/food', require('./api/itemingredientsroutes'));

module.exports = router;