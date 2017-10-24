use favourites;
db.dropDatabase();

db.books.insert([
  {
    title: "Going Postal",
    author: "Terry Pratchett",
  },
  {
    title: "Sinuhe the Egyptian",
    author: "Mika Waltari"
  },
  {
    title: "Wuthering Heights",
    author: "Emily Bronte"
  }
]);
