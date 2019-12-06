const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var itemsSchema = mongoose.Schema({
  id: {
    type: Number,
    require: true
  },
  name: String,
  price: String,
  sizes: String,
  colors: String,
  reviews: Array,
  imges: Array
});

var itemsModel = mongoose.model("Item", itemsSchema);
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
// sample1.save();
const Item = mongoose.model("item", itemsSchema);
module.exports.Item = Item;
exports.itemsModel = itemsModel;

// const MongoClient = require("mongodb").MongoClient;
// const uri =
//   "mongodb+srv://basima:<basima>@cluster0-stpym.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(
//   uri,
//   { useUnifiedTopology: true },
//   { useNewUrlParser: true }
// );
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
//
// var itemsSchema = mongoose.Schema({
//     id:{
//         type: Number,
//         unique: true
//     },
//     name : String,
//     price : String,
//     sizes: String,
//     colors : String,
//     reviews : String,
//     imges : String
// });
// var itemsModel = mongoose.model('Item', itemsSchema);
// exports.itemsModel = itemsModel;
