const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemsSchema = new Schema ({
  id: Number,
  name: String,
  price: String,
  sizes: String,
  colors: String,
  reviews: Array,
  imges: Array
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
    "https://www.merchadvice.com/wp-content/uploads/2019/03/%D7%98%D7%99-%D7%A9%D7%99%D7%A8%D7%98-%D7%92%D7%91%D7%A8%D7%99%D7%9D-%D7%9B%D7%97%D7%95%D7%9C-1.png"
  ]
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
// const Item = mongoose.model("item", itemsSchema);
// module.exports.Item = Item;
module.exports.itemsModel = itemsModel;
