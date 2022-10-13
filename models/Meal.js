const mongoose = require("mongoose");

const mealSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Meal = mongoose.model("Meal", mealSchema);
module.exports = Meal;
