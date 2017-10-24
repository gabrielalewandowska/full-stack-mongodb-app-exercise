var booksQueryHelper = require("../db/booksQueryHelper.js");
var express = require("express");
var booksRouter = express.Router();

booksRouter.get("/", function(req, res) {
  console.log(Date.now(), "/api/favourite/books route hit");

  booksQueryHelper.all(function (books){
      console.log("booksQueryHelper.all callback hit");
      res.json(books);
  });
});

module.exports = booksRouter;
