const User = require("../models/User");

const GetAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find();

    return res
      .status(200)
      .json({ data: allUsers, message: "Users successfully fetched" });
  } catch (error) {
    next(error);
  }
};

const GetUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const singleUser = await User.findOne({ _id: id });
    return res
      .status(200)
      .json({ data: singleUser, message: "User successfully fetched" });
  } catch (error) {
    next(error);
  }
};

const CreateUser = async (req, res, next) => {
  try {
    const { name, price, picture, description } = req.body;
    console.log(req.body);
    let newUser = new User({
      name,
      picture,
      price,
      description,
    });

    newUser = await newUser.save();
    return res
      .status(201)
      .json({ data: newUser, message: "User successfully created" });
  } catch (error) {
    next(error);
  }
};

const EditUser = async (req, res, next) => {
  try {
    const { name, price, picture, description } = req.body;
    const { id } = req.params;

    const updateUser = await User.findOneAndUpdate(
      { _id: id },
      { name, price, picture, description }
    );

    return res
      .status(201)
      .json({ data: updateUser, message: "User successfully updated" });
  } catch (error) {
    next(error);
  }
};

const DeleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findOneAndDelete({ _id: id });

    return res
      .status(200)
      .json({ data: deletedUser, message: "User Successfully Deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = { GetAllUsers, GetUser, DeleteUser, CreateUser, EditUser };
