const express = require("express");
const router = express.Router();
const userController = require("../controllers/students");

router.post("/students/registration", userController.createStudentsData)

router.get('/getStudentData', userController.getAllStudentsData)
router.post('/login', userController.checkUserDetails)


module.exports = router


