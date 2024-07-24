const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  create,
  readAll,
  readOneById,
  updateCar,
  update,
  destroy,
} = require("../../../controllers/usersActions");

const hashPassword = require("../../../services/hashpassword");

const validateUserSchema = require("../../../middleware/ValidateUserSchema");

const checkExistingUser = require("../../../middleware/CheckExistingUser");

// Route to add a new user
router.post("/", validateUserSchema, checkExistingUser, hashPassword, create);
// Route to get a list of users
router.get("/", readAll);
// Route to get a specific user by ID
router.get("/:id", readOneById);
// Route to update only the carId of the user
router.put("/", updateCar);
// Route to update a specific user by ID
router.put("/:id", validateUserSchema, hashPassword, update);
// Route to delete a specific user by ID
router.delete("/:id", destroy);
/* ************************************************************************* */

module.exports = router;
