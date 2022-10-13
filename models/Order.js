const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  order_type: {
    type: String,
    enum: ["dine-in", "delivery", "pick-up"],
    required: true,
  },
  meals: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Meals",
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  delivery_address: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  table: {
    type: mongoose.Types.ObjectId,
    ref: "Table",
    required: true,
  },
  paid: {
    type: Boolean,
    default: false,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
