const Order = require("../models/Order");

const GetAllOrders = async (req, res, next) => {
  try {
    const allOrders = await Order.find();

    return res
      .status(200)
      .json({ data: allOrders, message: "Orders successfully fetched" });
  } catch (error) {
    next(error);
  }
};

const GetOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const singleOrder = await Order.findOne({ _id: id });
    return res
      .status(200)
      .json({ data: singleOrder, message: "Order successfully fetched" });
  } catch (error) {
    next(error);
  }
};

const CreateOrder = async (req, res, next) => {
  try {
    const {
      user_name,
      order_type,
      meals,
      price,
      delivery_address,
      phone_number,
      table,
      paid,
    } = req.body;
    console.log(req.body);
    let newOrder = new Order({
      user_name,
      order_type,
      meals,
      price,
      delivery_address,
      phone_number,
      table,
      paid,
    });

    newOrder = await newOrder.save();
    return res
      .status(201)
      .json({ data: newOrder, message: "Order successfully created" });
  } catch (error) {
    next(error);
  }
};

const EditOrder = async (req, res, next) => {
  try {
    const {
      user_name,
      order_type,
      meals,
      price,
      delivery_address,
      phone_number,
      table,
      paid,
    } = req.body;
    const { id } = req.params;

    const updateOrder = await Order.findOneAndUpdate(
      { _id: id },
      {
        user_name,
        order_type,
        meals,
        price,
        delivery_address,
        phone_number,
        table,
        paid,
      }
    );

    return res
      .status(201)
      .json({ data: updateOrder, message: "Order successfully updated" });
  } catch (error) {
    next(error);
  }
};

const DeleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedOrder = await Order.findOneAndDelete({ _id: id });

    return res
      .status(200)
      .json({ data: deletedOrder, message: "Order Successfully Deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  GetAllOrders,
  GetOrder,
  DeleteOrder,
  CreateOrder,
  EditOrder,
};
