const { Router } = require("express");
const {
  GetAllOrders,
  GetOrder,
  DeleteOrder,
  CreateOrder,
  EditOrder,
} = require("../controllers/OrderController");

const router = Router();

router.route("/").get(GetAllOrders).post(CreateOrder);
router.route("/:id").get(GetOrder).patch(EditOrder).delete(DeleteOrder);

module.exports = router;
