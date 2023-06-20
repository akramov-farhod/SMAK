const express = require("express");

const {
  getAllMenuItems,
  getMenuItem,
  createMenuItem,
  deleteMenuItem,
  updateMenuItem,
} = require("../controllers/menuController");

const router = express.Router();

// GET all MENU items
router.get("/", getAllMenuItems);

// GET a single MENU item
router.get("/:id", getMenuItem);

// POST a new MENU item
router.post("/", createMenuItem);

// DELETE a MENU item
router.delete("/:id", deleteMenuItem);

// UPDATE a MENU item
router.patch("/:id", updateMenuItem);

module.exports = router;
