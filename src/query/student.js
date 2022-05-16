const { createStudentsData } = require("../controllers/students");
const db = require("../models");
const { checkout } = require("../routes/students");

createStudent = async function(obj) {
  const mobilenumber = await db.Students.findOne({ where: {mobileNumber: obj.mobileNumber} });
  if(!mobilenumber === obj.mobileNumber || mobilenumber === null){
    let data = await db.Students.create(obj);
    return data
  }else{
    return ({error: true, message: "mobile number already exist"})
  }
};

getAllStudents = async function(){
  let student = await db.Students.findAll();
  return student
}

checkMobileNumber = async function(mNumber){
  // console.log("number from body",mNumber);
    // console.log("hello andy ");
    let mobileNo = await db.Students.findOne({where: {mobileNumber: mNumber.mobileNumber}})
    // console.log("numberxxxx", mobileNo);
    // console.log(mobileNo.dataValues,mobileNo.dataValues.mobileNumber,"mbc\n\n\n ");
    if(mobileNo !== null){
      // console.log(mNumber.mobileNumber === mobileNo.dataValues,"vvvvvvvvvvvvvv");
      // console.log(mNumber.mobileNumber,"11111111111",typeof(mNumber.mobileNumber));
      // console.log(mobileNo.dataValues,"22222222");
      if(mNumber.mobileNumber === parseInt(mobileNo.dataValues.mobileNumber)){
        return ({status: true, message: "login successfuly"})
      }else{
        return {status: false, message: "A/c not found!, please register first."}
      }
    }else{
      return {status: false, message: "A/c not found!, please register first."}

    }

}


module.exports = {createStudent, getAllStudents, checkMobileNumber};
