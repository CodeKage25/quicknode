const { Router } = require("express");
const {
  GetAllUsers,
  GetUser,
  DeleteUser,
  CreateUser,
  EditUser,
} = require("../controllers/UserController");

const router = Router();

router.route("/").get(GetAllUsers).post(CreateUser);
router.route("/:id").get(GetUser).patch(EditUser).delete(DeleteUser);

module.exports = router;
