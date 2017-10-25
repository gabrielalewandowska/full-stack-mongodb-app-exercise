var booksQueryHelper = require("../../client/helpers/booksQueryHelper.js");
var express = require("express");
var booksRouter = express.Router();

booksRouter.get("/", function(req, res) {
  console.log(Date.now(), "/favourite/books route hit");

  booksQueryHelper.all(function (books){
      console.log("booksQueryHelper.all callback hit");
      res.json(books);
  });
});

module.exports = booksRouter;
