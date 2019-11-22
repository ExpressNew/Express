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

sample1.save((error,result)=>{
    if(error){
        console.log("errrrrror",error
        )
    }
    else{
    console.log("doneeee")
    }
    });
module.exports.itemsModel = itemsModel;
