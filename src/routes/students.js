const express = require("express");
const router = express.Router();
const userController = require("../controllers/students");

router.post("/api/studentRegistration", userController.createStudentsData)

router.get('/api/getStudentData', userController.getAllStudentsData)

router.post('/api/login', userController.checkUserDetails)

router.post('/api/otpVerifiy',userController.checkOtp)


module.exports = router


