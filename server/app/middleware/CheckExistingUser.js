const tables = require("../../database/tables");

const checkExistingUser = async (req, res, next) => {
  const { email } = req.body;

  try {
    const existingUser = await tables.users.findUser(email);
    if (existingUser) {
      res.status(400).json({ message: "Email déjà utilisé" });
    }
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = checkExistingUser;
