const express = require("express");
const router = express.Router();
const userController = require("../controllers/parents");

router.post("/api/parentRegistration", userController.createParentsAccount)

router.get('/api/getParentsData', userController.getAllParentsData)

router.post('/api/login', userController.checkUserDetails)

router.post('/api/otpVerifiy',userController.checkOtp)


module.exports = router
