//* IMPORTING OUR ITEMSALLERGENS CLASS from the DAO

const daoClass = require('../../dao/itemallergendao');

//todo making a new object class from the itemallergensdao class template
const dao = new daoClass();

const express = require('express');
const router = express.Router();

router.get('/itemallergenstable', (req, res) => {
    dao.innerJoin(req, res);
});