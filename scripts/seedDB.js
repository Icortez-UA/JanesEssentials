const mongoose = require("mongoose");
const db = require("../server/users/user.model");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/janesessentials");

const bookSeed = [
  {
  username: "user1",
  hash: "12345",
  firstName: "userFirst",
  lastName: "userLast",
  createdDate: new Date(Date.now())
  },
  {
  username: "user2",
  hash: "123456",
  firstName: "userFirst",
  lastName: "userLast",
  createdDate: new Date(Date.now())
  },
  {
  username: "user3",
  hash: "1234567",
  firstName: "userFirst",
  lastName: "userLast",
  //createdDate: new Date(Date.now())
  }
];


db.remove({})
  .then(() => db.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
