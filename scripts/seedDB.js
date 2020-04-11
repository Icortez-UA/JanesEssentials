const mongoose = require("mongoose");
const db = require("../server/users/user.model")


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/JanesEssentials");

const login = [
    {
        
    }
]






db.Post.remove({})
  .then(() => db.Post.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });