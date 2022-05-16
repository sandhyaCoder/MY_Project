const studentdata = require('../query/parents');


  async function  getAllParents (req, res){
    try {
      const body = req.body
      const obj = {
        name: body.name,
        class: body.class,
        rollNumber: body.rollNumber,
        mobileNumber: body.mobileNumber,
        passWord: body.passWord,
      }
      const userCollection = await studentdata.getAllParents(obj)
      // console.log("fgdtjfuyguihoi",userCollection)
      res.status(201).send(userCollection)
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  }

module.exports = {getAllParents}
