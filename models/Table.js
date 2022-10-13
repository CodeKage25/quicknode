const mongoose = require("mongoose");

const tableSchema = mongoose.Schema({
  number: {
    type: String,
    required: true,
  },
  is_reserved: {
    type: Boolean,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
  },
  reservation_date: {
    type: Date,
    required: true,
  },
  reservation_time: {
    type: Date,
    required: true,
  },
});

const Table = mongoose.model("Table", tableSchema);
module.exports = Table;
