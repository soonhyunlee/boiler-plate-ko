const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const {User} = require('./models/User');
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://hyunee1980_db_user:eesh7058!!@cluster0.9mcfl91.mongodb.net/myDBTEST")
.then(()=>console.log('connected'))
.catch(err=>console.log(err))

// application  에코딩
app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json());


app.get('/', (req, res) => {  
  res.send('Hello World!')
})

app.post('/register',async(req,res) => {
  //res.send('Hello World!')
  // 회원가입할때 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.
  
  const user  = new User(req.body);

  try {
    const doc = await user.save();
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.json({ success: false, err });
  }

  

});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)



  
})