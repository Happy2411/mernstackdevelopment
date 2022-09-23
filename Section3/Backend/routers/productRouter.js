// To perform product database operation
const express = require('express');
const router = express.Router();
const Model = require('../models/productModels');

// route or endpoints
router.get('/add', (req, res) => {
    res.send('response from add product');
})


module.exports = router;