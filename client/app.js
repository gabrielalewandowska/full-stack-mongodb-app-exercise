var requestHelper = require("./helpers/requestHelper.js");

window.addEventListener("DOMContentLoaded", function (){
  requestHelper.getRequest("http://localhost:3000/favourite/books", function(books){
    console.log(films);

    var mainDiv = document.getElementById("main");
    var list = document.createElement("ul");

    books.forEach(function (book){
      var listItem = document.createElement("li");
      listItem.innerHTML = "Title: " + book.title <br> "Author: " + book.author;
      list.appendChild(listItem);
    });
    mainDiv.appendChild(list);
  })
});
