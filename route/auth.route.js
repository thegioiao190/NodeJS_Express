var express = require("express");
var router = express.Router();

var controller = require("../controller/auth.controller");
var Validation = require("../Validation/checkBlank");
var ValidationAcc = require("../Validation/checkAccount");


router.get("/login",controller.login)

router.post("/login",ValidationAcc.checkAccout,controller.loginMethod)

module.exports = router;