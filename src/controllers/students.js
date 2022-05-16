const studentdata = require('../query/student');


  async function  createStudentsData (req, res){
    try {
      const body = req.body
      const obj = {
        studentName: body.studentName,
        class: body.class,
        rollNumber: body.rollNumber,
        mobileNumber: body.mobileNumber,
        passWord: body.passWord,
      }
      const userCollection = await studentdata.createStudent(obj)
      // console.log(userCollection, "xxxxxxxxxxxxx");
      res.status(201).send(userCollection)
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  }

  async function  getAllStudentsData (req, res){
    try {
      const studentCollection = await studentdata.getAllStudents()
      res.status(201).send(studentCollection)
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  }

async function checkUserDetails(req,res){
  // console.log("body data",req.body);
  try{
    const checkMobileNo = await studentdata.checkMobileNumber(req.body);
    // console.log("yyyyyyyyyyyyyyyyyy",checkMobileNo);
    res.status(200).send(checkMobileNo)


  }catch(e){
    res.status(400).send(e)

  }
}

module.exports = {createStudentsData, getAllStudentsData, checkUserDetails}
