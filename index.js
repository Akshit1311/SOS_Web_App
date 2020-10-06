const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Twilio

var twilio = require("twilio");

var client = new twilio(
  "ACc13a914c29f468197167f3aec286b8e8",
  "8bc2270522d5228fe9fd0103ad9db93c"
);

app.use(express.static(__dirname + "/"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/index.html", function (req, res) {
  // console.log(req.body.phoneNum);
  console.log(req.body);
  client.messages.create({
    to: "+91" + req.body.phoneNum,
    // to: "+919971093759",
    from: "+12056519952",
    body: req.body.msg,
  });
  // console.log()
});

app.listen(3000, function () {
  console.log("Server started on port 3000 ...");
});
