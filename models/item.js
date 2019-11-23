const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log(" database connection succeded");
});
const itemsSchema = new Schema ({
  id: Number,
  name: String,
  price: String,
  sizes: Array,
  colors: String,
  reviews: Array,
  imges: Array,
  mainComImg:Array,
  mainComDis:String,
  mainComPri:String,
  mainComDisc:String,
  mainComRef:String

});

const itemsModel = mongoose.model("Item", itemsSchema);

sample1 = new itemsModel({
  id: 4,
  name: "shirt",
  price: "10JD",
  sizes: "xL , L, M",
  colors: "Green, red, blue",
  reviews: ["this item is mdrishow", "rev2", "rev3"],
  imges: [
    "https://images.express.com/is/image/expressfashion/0021_01785475_0925_f035?cache=on&wid=960&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
  ],
  mainComImg:["https://images.express.com/is/image/expressfashion/0021_01775487_0009_f015?cache=on&wid=960&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon","https://images.express.com/is/image/expressfashion/0021_01785475_0925_f035?cache=on&wid=960&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon"],
  mainComDis:"this is a red t-shirt",
  mainComPri:"String",
  mainComDisc:"String",
  mainComRef:"String"
});

legacy = new itemsModel({
id:1,
name:"Supersoft Crew Neck T-Shirt",
price:"$24.90",
sizes:"XS,S,M,L,XL,XXL",
colors: "red",
reviews:["it was amasing","i like it so much","this was awesome"],
imges:[ "https://images.express.com/is/image/expressfashion/0020_00284105_2029_f020?cache=on&wid=480&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon"
]
})
legacy.save((error,result)=>{
    if(error){
        console.log("errrrrror",error
        )
    }
    else{
    console.log("doneeee")
    }
    });

    
    sample1.save((error,result)=>{
      if(error){
          console.log("errrrrror",error
          )
      }
      else{
      console.log("doneeeeeeeeeeeeeeeeeee")
      }
      });
module.exports.itemsModel = itemsModel;
