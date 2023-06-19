const express = require("express");

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
router.post("/", (req, res) => {
  res.json({
    message: "POST a new MENU item",
  });
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
