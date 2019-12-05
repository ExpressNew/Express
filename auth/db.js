const mongoose = require("mongoose");
const Schema = mongoose.Schema

const mongoURI = " mongodb+srv://yara:yara@cluster0-jfp7h.mongodb.net/second-project?retryWrites=true&w=majority"
mongoose.connect(mongoURI , {useNewUrlParser : true});
console.log("db connectedd !!!");


var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
 console.log("We're Connected!");
});



const userSchema = new Schema({
    emailAddress : { type: String},
    firstName : { type: String},
    lastName : { type: String},
    password : { type: String},
    country : { type: String},  
})


const Signup  = mongoose.model("signup " , userSchema);
  
// let save = user => {
//     var signup = new Signup({
//       email: user.email,
//       password: user.password,
//       date: user.date
//     });
//     signup.save();
//   };
var a = new Signup({
    emailAddress:"xcdcscnanaadel97@hotmail.com",
    firstName: "noran",
    lastName: "adel",
    password:"nanaadel",
    country:"joradn"
})
 //a.save();

 module.exports.Signup = Signup;
module.exports.userSchema = userSchema;
// module.exports.save = save;