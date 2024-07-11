const argon2 = require("argon2");

const tables = require("../../database/tables");
const { encodeJWT, decodeJWT } = require("../Helpers/jwtHelpers");

const login = async (req, res) => {
  const { email, password } = req.body;

  const [user] = await tables.users.findUserByEmail(email);

  if (!user) {
    return res.status(404).json({
      message: "combinaison invalide",
    });
  }

  const isAllowed = await argon2.verify(user.password, password);

  if (!isAllowed) {
    return res.status(404).json({
      message: "combinaison invalide",
    });
  }

  delete user.password;

  const token = encodeJWT(user);
  return res
    .status(200)
    .cookie("auth_token", token, {
      secure: false,
      httpOnly: true,
      maxAge: 3600000,
    })
    .json({
      user,
      token,
    });
};

const logout = (req, res) => {
  res.clearCookie("auth_token").sendStatus(200);
};

const checkAuth = (res, req) => {
  const token = req.cookies?.auth_token;
  if (!token) {
    return res.status(403).json(null);
  }
  try {
    const validToken = decodeJWT(token);
    return res
      .status(200)
      .cookie("auth_token", token, {
        secure: false,
        httpOnly: true,
        maxAge: 3600000,
      })
      .json({ user: validToken });
  } catch (e) {
    return console.error(e);
  }
};
module.exports = { login, logout, checkAuth };
