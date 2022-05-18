
const express = require('express');
const studentRoutes = require('./src/routes/students')
const parentRoutes = require('./src/routes/parents')
const app = express();
app.use(express.json());

app.use("/studentData",studentRoutes)
app.use("/parentData",parentRoutes)

// app.get('/hello',(req,res)=>{
//   return res.send("hello sandhya")
// })

app.listen(3000, () => {
  console.log('server is runing on 3000 port')
})

