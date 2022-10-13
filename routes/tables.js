const { Router } = require("express");
const {
  GetAllTables,
  GetTable,
  DeleteTable,
  CreateTable,
  EditTable,
} = require("../controllers/TableController");

const router = Router();

router.route("/").get(GetAllTables).post(CreateTable);
router.route("/:id").get(GetTable).patch(EditTable).delete(DeleteTable);

module.exports = router;
