const express = require('express');
const router = express.Router();

const {getData} = require("../controllers/doctorsData");

router.get("/doctors",getData);


module.exports = router;

