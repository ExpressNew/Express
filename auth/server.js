const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const mongoose = require ("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const app = express();

const key  = "$bossboss222";

const db = require("./db");
const PORT = process.env.PORT || 4000;

process.env.SECRET_KEY = "secret";

app.use(bodyParser.json());

app.use(express.static("client/dist"));

app.use(cors());
app.use(bodyParser.urlencoded({ extended : false }));

const mongoURI = " mongodb+srv://yara:yara@cluster0-jfp7h.mongodb.net/second-project?retryWrites=true&w=majority"
mongoose.connect(mongoURI , {useNewUrlParser : true});
console.log("db connectedd !!!");

app.get("/signup",(req,res)=>{
  res.send("hi")
  console.log("hi")
})


app.post("/signup", (req, res) => {
  console.log(req.body.emailAddress)
  const userData = {
    emailAddress : req.body.emailAddress,
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    password : req.body.password,
    country : req.body.country
  }
  console.log(userData)
  db.Signup.findOne({
    emailAddress : req.body.emailAddress
  })
  .then(user => {
    if(!user) {
     // console.log(user.email)

      bcrypt.hash(req.body.password , 10 ,(err, hash) =>{
        userData.password = hash
        db.Signup.create(userData)
            .then(user => {
              res.json({ 
               status : user.emailAddress + "welcome !!"
 
              })
              .catch(err => {
                res.send("error")
              });

           });
        });
       } else {
          res.json({ 
           error: "User is already exists !!"
          })
        }
     })
      .catch(err => {
        res.send("error" + err)
      });
    });
    

 app.post("/login",verifyToken, (req, res) => {
  db.Signup.findOne({
    emailAddress: req.body.emailAddress
  })
  .then(user => {
    if(user) {
      if(bcrypt.compareSync(req.body.password , user.password)) {
        const payload = {
          emailAddress: user.emailAddress,
          firstName: user.firstName,
          lastName: user.lastName,
          country: user.country
        }
       

        let token = jwt.sign(payload,secret, {
          expiresIn: 1440
        })
        res.send(token)
      }else{
        res.json({error: "user does not exist !!"})
      }
      console.log("hhhiiiiii froomm here!!")
    }
  })
  .catch(err => {
    res.send("error" + err)
  })
})
//
function verifyToken (req,res,next) {
  //format of token => Authorization: Bearer <token>
   const bearerHeader = req.headers["Authorization"];
   if (typeof bearerHeader !== "undefined"){
       //split at the space 
       const bearer = bearerHeader.split(' ');
   //get token from array
       const token = bearer[1];
   //set the token
        req.token = token;
        next();
   } else {
       res.sendStatus(403);
   }
}

app.listen(PORT, () => {     
    console.log(`Server is running on port ${PORT}`)
   })