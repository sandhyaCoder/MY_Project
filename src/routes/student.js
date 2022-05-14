const express = require("express");
const router = express.Router();
const userController = require("../controllers/students");

router.post("/api/users", userController.getAllUsers)

module.exports = router


