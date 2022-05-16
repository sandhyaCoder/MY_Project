const express = require("express");
const router = express.Router();
const userController = require("../controllers/parents");

router.post("/parents/registration", userController.getAllParents)

module.exports = router


