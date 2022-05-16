
const express = require('express');
const studentRoutes = require('./src/routes/student')
const app = express();
app.use(express.json());

app.use("/student",studentRoutes)

// app.get('/hello',(req,res)=>{
//   return res.send("hello sandhya")
// })

app.listen(3000, () => {
  console.log('server is runing on 3000 port')
})

