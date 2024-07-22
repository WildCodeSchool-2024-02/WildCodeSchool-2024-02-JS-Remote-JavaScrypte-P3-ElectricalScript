const tables = require("../../database/tables");

const validateUserEmail = async (req, res, next) => {
  const { email } = req.body;
  try {
    const existingUser = await tables.users.findUserByEmail(email);
    if (existingUser.email === email) {
      return res.status(400).json({ message: "Cet email est déjà utilisé" });
    }
    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = validateUserEmail;
