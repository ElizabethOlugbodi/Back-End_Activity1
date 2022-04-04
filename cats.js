const mongoose = require("mongoose");

const Cat = mongoose.model("Cat", {
  name: { type: String, unique: true },
  age: { type: Number, unique: false },
  owner_name: { type: String, unique: true },
  pet_visit: { type: Number, unique: false },
  number_of_litters: { type: Number, unique: false },
});

module.exports = Cat;
