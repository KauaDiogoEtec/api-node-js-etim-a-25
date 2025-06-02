const express = require('express'); 
const router = express.Router(); 

const RotasKaua = require('./routesKaua');

router.use('/', RotasKaua);

module.exports = router;