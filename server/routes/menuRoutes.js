const express = require("express");

const {
  getAllMenuItems,
  getMenuItem,
  createMenuItem,
} = require("../controllers/menuController");

const router = express.Router();

// GET all MENU items
router.get("/", getAllMenuItems);

// GET a single MENU item
router.get("/:id", getMenuItem);

// POST a new MENU item
router.post("/", createMenuItem);

// DELETE a MENU item
router.delete("/:id", (req, res) => {
  res.json({
    message: "DELETE a MENU item",
  });
});

// UPDATE a MENU item
router.patch("/:id", (req, res) => {
  res.json({
    message: "UPDATE a MENU item",
  });
});

module.exports = router;
