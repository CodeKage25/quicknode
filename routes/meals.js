const { Router } = require("express");
const {
  GetAllMeals,
  GetMeal,
  DeleteMeal,
  CreateMeal,
  EditMeal,
} = require("../controllers/MealController");

const router = Router();

router.route("/").get(GetAllMeals).post(CreateMeal);
router.route("/:id").get(GetMeal).patch(EditMeal).delete(DeleteMeal);

module.exports = router;
