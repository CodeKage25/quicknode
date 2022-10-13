const Table = require("../models/Table");

const GetAllTables = async (req, res, next) => {
  try {
    const allTables = await Table.find();

    return res
      .status(200)
      .json({ data: allTables, message: "Tables successfully fetched" });
  } catch (error) {
    next(error);
  }
};

const GetTable = async (req, res, next) => {
  try {
    const { id } = req.params;
    const singleTable = await Table.findOne({ _id: id });
    return res
      .status(200)
      .json({ data: singleTable, message: "Table successfully fetched" });
  } catch (error) {
    next(error);
  }
};

const CreateTable = async (req, res, next) => {
  try {
    const { number, is_reserved, seats, reservation_date, reservation_time } =
      req.body;
    console.log(req.body);
    let newTable = new Table({
      number,
      is_reserved,
      seats,
      reservation_date,
      reservation_time,
    });

    newTable = await newTable.save();
    return res
      .status(201)
      .json({ data: newTable, message: "Table successfully created" });
  } catch (error) {
    next(error);
  }
};

const EditTable = async (req, res, next) => {
  try {
    const { number, is_reserved, seats, reservation_date, reservation_time } =
      req.body;
    const { id } = req.params;

    const updateTable = await Table.findOneAndUpdate(
      { _id: id },
      { number, is_reserved, seats, reservation_date, reservation_time }
    );

    return res
      .status(201)
      .json({ data: updateTable, message: "Table successfully updated" });
  } catch (error) {
    next(error);
  }
};

const DeleteTable = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTable = await Table.findOneAndDelete({ _id: id });

    return res
      .status(200)
      .json({ data: deletedTable, message: "Table Successfully Deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  GetAllTables,
  GetTable,
  DeleteTable,
  CreateTable,
  EditTable,
};
