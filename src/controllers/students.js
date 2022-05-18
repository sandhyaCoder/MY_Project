const studentdata = require('../query/student');
const {generateAccessToken} = require('../auth/jwt')

//  For create studets account
  async function  createStudentsData (req, res){
    try {
      const body = req.body
      const obj = {
        studentName: body.studentName,
        class: body.class,
        rollNumber: body.rollNumber,
        mobileNumber: body.mobileNumber,
        passWord: body.passWord,
        otp: body.otp,

      }
      const userCollection = await studentdata.createStudent(obj)
      res.status(201).send(userCollection)
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  }

  // For get all students data 
  async function  getAllStudentsData (req, res){
    try {
      const studentCollection = await studentdata.getAllStudents()
      res.status(201).send(studentCollection)
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  }

  // For login with mobile number
async function checkUserDetails(req,res){
  try{
    const checkMobileNo = await studentdata.checkMobileNumber(req.body);
    if(checkMobileNo.status){
      const token = generateAccessToken(req.body)
      res.cookie("key", token);
      res.send({"token": "hello" + token})
    }else{
      res.send({"sorry": "Mobile number doesn't exist"});
    }
  
  }catch(e){
    res.status(500).send(e)

  }
}

// Otp verifiy 
async function checkOtp(req,res){
  try{
    const checkotp = await studentdata.checkOtp(req.body);
    if(checkotp.status){
      res.send({"token": "otp verify successfuly"})
    }else{
      res.send({"otp": "otp not found!, please create otp"});
    }
  }catch(e){
    res.status(500).send(e)

  }
}



module.exports = {createStudentsData, getAllStudentsData, checkUserDetails, checkOtp}
