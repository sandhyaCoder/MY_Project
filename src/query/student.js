
// const { createStudentsData } = require("../controllers/students");
const db = require("../models");
// const { checkout } = require("../routes/students");

// For create studets account with unique entry
createStudent = async function(obj) {
  const mobilenumber = await db.Students.findOne({ where: {mobileNumber: obj.mobileNumber} });
  if(!mobilenumber === obj.mobileNumber || mobilenumber === null){
    let data = await db.Students.create(obj);
    return data
  }else{
    return ({error: true, message: "mobile number already exist"})
  }
};

// Get all students
getAllStudents = async function(){
  let student = await db.Students.findAll();
  return student
}

// Login with mobile number
checkMobileNumber = async function(mNumber){
    let mobileNo = await db.Students.findOne({where: {mobileNumber: mNumber.mobileNumber}})
    if(mobileNo !== null){
      if(mNumber.mobileNumber === parseInt(mobileNo.dataValues.mobileNumber)){
        return ({status: true, message: "login successfuly"})
      }else{
        return {status: false, message: "A/c not found!, please register first."}
      }
    }else{
      return {status: false, message: "A/c not found!, please register first."}
    }
}

// FOr otp 
checkOtp = async function(otpFromBody){
  let getOtp  = await db.Students.findOne({where: {otp: otpFromBody.otp}})
  if(getOtp !== null){
      return ({status: true, message: "otp verify successfuly"})
  }else{
    return {status: false, message: "otp not found!, please create otp"}
  }
}


module.exports = {createStudent, getAllStudents, checkMobileNumber, checkOtp};
