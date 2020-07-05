const router = require("express").Router();
const bookRoutes = require("./items");

// Book routes
router.use("/items", itemRoutes);

module.exports = router;