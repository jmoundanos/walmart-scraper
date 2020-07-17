const router = require("express").Router();
const booksController = require("../../controllers/itemController");

// Matches with "/api/items
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/items/:id"
router.route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;