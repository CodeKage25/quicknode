require("dotenv").config();
const express = require("express");
const { default: helmet } = require("helmet");
const cors = require("cors");
const http = require("http");
const mongoose = require("mongoose");
const MealsRoute = require("./routes/meals");
const UsersRoute = require("./routes/users");
const OrdersRoute = require("./routes/orders");
const TablesRoute = require("./routes/tables");

const PORT = process.env.PORT || 3909;
const app = express();

const connection = async () => {
  const dbUrl = process.env.MONGO_URL;
  const connected = await mongoose.connect(dbUrl);
  if (connected.STATES.connected === 1) {
    console.log("successfully connected to database");
  }
};

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.json({ success: true, message: "API running" });
});

connection();

app.use("/meals", MealsRoute);
app.use("/users", UsersRoute);
app.use("/tables", TablesRoute);
app.use("/orders", OrdersRoute);

const server = http.createServer(app).listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});

module.exports = server;
