const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/server");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var nameSchema = new mongoose.Schema({
  firstName: String,
  lastNameName: String
 });

var User = mongoose.model("User", nameSchema);

/*app.get("/", (req, res) => {
 res.send("Hello World");
});*/

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
 });

app.post("/addname", (req, res) => {
  var myData = new User(req.body);
  myData.save()
    .then(item => {
      res.send(console.log("item saved to database"));
    })
    .catch(err => {
      console.log("item not saved to database");
      res.status(400).send("unable to save to database");
    });
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
 });