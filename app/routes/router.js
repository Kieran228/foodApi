//todo IMPORT EXPRESS PACKAGE
const express = require('express');




const router = express.Router();


router.use('/allergens', require('./api/allergenroutes'));

router.use('/ingredients', require('./api/ingredientroutes'));

router.use('/items', require('./api/itemroutes'));







// router.use('/food', require('./api/itemingredientsroutes'));

module.exports = router;