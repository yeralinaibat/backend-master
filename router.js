const Router = require("express");
const testController = require("./controllers/testController");

const router = new Router();

router.get("/get-tests-by-category", testController.getTestByCategory);
router.get("/get-categories", testController.getCategories);

module.exports = router;
