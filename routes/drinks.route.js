const { Router } = require("express");
const { DrinksController } = require("../controllers/drinks.controller");

const router = Router();

router.get("/drinks", DrinksController.getDrinks);
router.get("/drinks/in-stock", DrinksController.getDrinksInStock);
router.get("/drinks/:id", DrinksController.getDrink);
router.post("/drinks", DrinksController.createDrink);
router.patch("/drinks/:id", DrinksController.patchUpdate);
router.delete("/drinks/:id", DrinksController.deleteDrink);

module.exports = router;
