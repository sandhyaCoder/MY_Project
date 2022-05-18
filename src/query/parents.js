const db = require("../models");

createParentsAccount = async function(obj) {
  const mobilenumber = await db.Parents.findOne({ where: {mobileNumber: obj.mobileNumber} });
  if(!mobilenumber === obj.mobileNumber || mobilenumber === null){
    let data = await db.Parents.create(obj);
    return data
  }else{
    return ({error: true, message: "mobile number already exist"})
  }
};
// Get all students
getAllParents = async function(){
  let student = await db.Parents.findAll();
  return student
}

// Login with mobile number
checkMobileNumber = async function(mNumber){
    let mobileNo = await db.Parents.findOne({where: {mobileNumber: mNumber.mobileNumber}})
    // console.log(mobileNo,"sandhya");
    if(mobileNo !== null){
      // console.log("hello");
      if(mNumber.mobileNumber === parseInt(mobileNo.dataValues.mobileNumber)){
        return ({status: true, message: "login successfuly"})
      }else{
        return {status: false, message: "A/c not found!, please register first bauudha."}
      }
    }else{
      return {status: false, message: "A/c not found!, please register first."}
    }
}

// For otp 
checkOtp = async function(otpFromBody){
  let getOtp  = await db.Parents.findOne({where: {otp: otpFromBody.otp}})
  if(getOtp !== null){
      return ({status: true, message: "otp verify successfuly"})
  }else{
    return {status: false, message: "otp not found!, please create otp"}
  }
}



module.exports = { createParentsAccount, getAllParents, checkMobileNumber, checkOtp};
