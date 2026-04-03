const express = require('express')
const app = express()
const port = 3000

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://hyunee1980_db_user:eesh7058!!@cluster0.9mcfl91.mongodb.net/myDBTEST")
.then(()=>console.log('connected'))
.catch(err=>console.log(err))


app.get('/', (req, res) => {  
  res.send('Hello World!')






  
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})