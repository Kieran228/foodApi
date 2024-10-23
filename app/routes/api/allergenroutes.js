//* IMPORTING OUR ITEMSALLERGENS CLASS from the DAO

const daoClass = require('../../dao/allergendao');

//todo making a new object class from the itemallergensdao class template
const dao = new daoClass();

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    dao.findAllAllergens(req, res);
});

module.exports = router;