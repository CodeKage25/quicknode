const Meal = require("../models/Meal");

const GetAllMeals = async (req, res, next) => {
  try {
    const allMeals = await Meal.find();

    return res
      .status(200)
      .json({ data: allMeals, message: "Meals successfully fetched" });
  } catch (error) {
    next(error);
  }
};

const GetMeal = async (req, res, next) => {
  try {
    const { id } = req.params;
    const singleMeal = await Meal.findOne({ _id: id });
    return res
      .status(200)
      .json({ data: singleMeal, message: "Meal successfully fetched" });
  } catch (error) {
    next(error);
  }
};

const CreateMeal = async (req, res, next) => {
  try {
    const { name, price, picture, description } = req.body;
    console.log(req.body);
    let newMeal = new Meal({
      name,
      picture,
      price,
      description,
    });

    newMeal = await newMeal.save();
    return res
      .status(201)
      .json({ data: newMeal, message: "Meal successfully created" });
  } catch (error) {
    next(error);
  }
};

const EditMeal = async (req, res, next) => {
  try {
    const { name, price, picture, description } = req.body;
    const { id } = req.params;

    const updateMeal = await Meal.findOneAndUpdate(
      { _id: id },
      { name, price, picture, description }
    );

    return res
      .status(201)
      .json({ data: updateMeal, message: "Meal successfully updated" });
  } catch (error) {
    next(error);
  }
};

const DeleteMeal = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedMeal = await Meal.findOneAndDelete({ _id: id });

    return res
      .status(200)
      .json({ data: deletedMeal, message: "Meal Successfully Deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = { GetAllMeals, GetMeal, DeleteMeal, CreateMeal, EditMeal };
