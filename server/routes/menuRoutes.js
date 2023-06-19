const express = require("express");
const MenuItem = require("../models/menuModel");

const router = express.Router();

// GET all MENU items
router.get("/", (req, res) => {
  res.json({
    message: "GET all MENU items",
  });
});

// GET a single MENU item
router.get("/:id", (req, res) => {
  res.json({
    message: "GET a single MENU item",
  });
});

// POST a new MENU item
router.post("/", async (req, res) => {
  const { title, price, description } = req.body;

  try {
    const menuItem = await MenuItem.create({ title, price, description });
    res.status(200).json(menuItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

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
