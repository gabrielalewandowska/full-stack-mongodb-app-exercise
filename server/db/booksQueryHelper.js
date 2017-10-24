var MongoClient = require("mongodb").MongoClient;

var booksQueryHelper = {
  url: "mongodb://localhost:27017/film_reviews_site",
  all: function(onQueryFinished) {
    console.log("booksQueryHelper.all started");

    MongoClient.connect(this.url, function(err, db) {
        console.log("MongoClient.connect started");
        var booksCollection = db.collection("books");

        filmsCollection.find().toArray(function (err, docs) {
          console.log(".find().toArray() callback start");
          console.log("calling onQueryFinished with docs");
          onQueryFinished(docs);
      });
    });
  }
}

module.exports = booksQueryHelper;
