const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require ("body-parser");
const path = require('path');
const app = express();
var mocker = require('mocker-data-generator').default

app.use(express.static(__dirname + "/client/dist"));
app.use(express.static(__dirname + "/node_modules"));
app.use(express.static(__dirname+"/client/src/components"))
// //Config DB 
const URI = require("./config/keys").mongoURI;
console.log(URI)
mongoose.connect( URI, { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log(" database connection succeded");
});
app.use(bodyParser.json());

const itemsModel = require("./models/item.js").itemsModel;

app.get("/imgs/:id", (req, res) => {
    itemsModel.find({})
       .then(itemsModel => res.json(itemsModel));
   })
const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log("server started on port " + port)});