const mongoose = require("mongoose");

const DrinkSchema = mongoose.Schema({
  name: String,
  price: Number,
  availability: Number,
  caffeine: String,
  volume: Number,
  description: String,
});

const Drink = mongoose.model("Drink", DrinkSchema);

module.exports = Drink;
