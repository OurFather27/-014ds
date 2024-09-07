const jwt = require('jsonwebtoken');

// Middleware to verify user's token
const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }

  jwt.verify(token, "jwt-secret-key", (err, decoded) => {
    if (err) {
      return res.status(500).json({ error: "Error with token" });
    }
    req.user = decoded;
    next();
  });
};
module.exports = verifyUser;
