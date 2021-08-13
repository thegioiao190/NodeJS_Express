var express = require("express");
var router = express.Router();
var db = require("../db");
var product = require("../controller/product.controller");

router.get("/",product.showProduct);

module.exports = router;