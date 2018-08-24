# mevn-starter
MEVN Starter

## steps to build server
1. mkdir server
2. cd server
3. npm init -y
4. npm install express
  - npm install
5. touch app.js
  - add:
    const express = require("express");
    const app = express();
    const port = 3000;
    
    app.get("/", (req, res) => {
    res.send("Hello World");
    });
    
    app.listen(port, () => {
    console.log("Server listening on port " + port);
    });
6. npm start (check http://localhost:3000)
7. touch index.html
  - <!DOCTYPE html>
    <html>
    <head>
    <title>Intro to Node and MongoDB</title>
    </head>
    
    <body>
    <h1>Into to Node and MongoDB</h1>
    <form method="post" action="/addname">
    <label>Enter Your Name</label><br>
    <input type="text" name="firstName" placeholder="Enter first name..." required>
    <input type="text" name="lastName" placeholder="Enter last name..." required>
    <input type="submit" value="Add Name">
    </form>
    </body>
    </html>
8. comment out app.get from app.js and 
  - add:
    app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
    });
9. npm install mongoose --save
10. connect to mongodb from app.js
  - add:
    const mongoose = require("mongoose");
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost:27017/mevn-starter/server");
11. Create db schema in app.js
  - add:
    const nameSchema = new mongoose.Schema({
    firstName: String,
    lastNameName: String
    });
12. create model from schema in app.js
  - add:
    var User = mongoose.model("User", nameSchema);
13. npm install body-parser --save
  - add too app.js:
    const bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
14. create endpoint to add name to db in app.js
  - add: 
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