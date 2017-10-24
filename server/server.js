var express = require("express");
var app = express();
app.use(express.static(__dirname + "/../client/build"));
var booksRouter = require("./controllers/booksController.js");
app.use("/api/favourite/books", booksRouter);

app.listen(3000, function(){
  console.log("App running");
})
