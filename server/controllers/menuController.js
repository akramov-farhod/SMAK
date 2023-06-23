const MenuItem = require("../models/menuModel");
const mongoose = require("mongoose");

// GET all MENU items
const getAllMenuItems = async (req, res) => {
  const allMenuItems = await MenuItem.find({}).sort({ createdAt: -1 });

  res.status(200).json(allMenuItems);
};

// GET a single MENU item
const getMenuItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "This Menu Item does NOT exist" });
  }

  const menuItem = await MenuItem.findById(id);

  if (!menuItem) {
    return res.status(400).json({ error: "This Menu Item does NOT exist" });
  }

  res.status(200).json(menuItem);
};

// CREATE a new MENU item
const createMenuItem = async (req, res) => {
  const { title, price, description } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }

  if (!price) {
    emptyFields.push("price");
  }

  if (!description) {
    emptyFields.push("description");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the Fields", emptyFields });
  }

  // adding a Document to DB
  try {
    const menuItem = await MenuItem.create({ title, price, description });
    res.status(200).json(menuItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a MENU item
const deleteMenuItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "This Menu Item does NOT exist" });
  }

  const menuItem = await MenuItem.findOneAndDelete({ _id: id });

  if (!menuItem) {
    return res.status(400).json({ error: "This Menu Item does NOT exist" });
  }

  res.status(200).json(menuItem);
};

// UPDATE a MENU item
const updateMenuItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "This Menu Item does NOT exist" });
  }

  const menuItem = await MenuItem.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!menuItem) {
    return res.status(400).json({ error: "This Menu Item does NOT exist" });
  }

  res.status(200).json(menuItem);
};

module.exports = {
  getAllMenuItems,
  getMenuItem,
  createMenuItem,
  deleteMenuItem,
  updateMenuItem,
};
