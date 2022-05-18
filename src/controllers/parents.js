const parentData = require('../query/parents');
const {generateAccessToken} = require('../auth/jwt')

// Creat account parents account
  async function  createParentsAccount (req, res){
    try {
      const body = req.body
      const obj = {
        name: body.name,
        class: body.class,
        rollNumber: body.rollNumber,
        mobileNumber: body.mobileNumber,
        passWord: body.passWord,
        otp: body.otp
      }
      const userCollection = await parentData.createParentsAccount(obj)
      // console.log("fgdtjfuyguihoi",userCollection)
      res.status(201).send(userCollection)
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  }
  // For get all students data 
  async function  getAllParentsData (req, res){
    try {
      const studentCollection = await parentData.getAllParents()
      res.status(201).send(studentCollection)
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  }

  // For login with mobile number
async function checkUserDetails(req,res){
  try{
    const checkMobileNo = await parentData.checkMobileNumber(req.body);
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
    const checkotp = await parentData.checkOtp(req.body);
    if(checkotp.status){
      res.send({"token": "otp verify successfuly"})
    }else{
      res.send({"otp": "otp not found!, please create otp"});
    }
  }catch(e){
    res.status(500).send(e)

  }
}


module.exports = {createParentsAccount, getAllParentsData, checkUserDetails, checkOtp}
