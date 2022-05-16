const studentdata = require('../query/student');


  async function  getAllUsers (req, res){
    try {
      const body = req.body
      const obj = {
        studentName: body.studentName,
        class: body.class,
        rollNumber: body.rollNumber,
        mobileNumber: body.mobileNumber,
        passWord: body.passWord,
      }
      const userCollection = await studentdata.getAllStudents(obj)
      res.status(201).send(userCollection)
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  }

module.exports = {getAllUsers}
