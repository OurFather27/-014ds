const jwt = require('jsonwebtoken');

const adminAuth = () => {
  return (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Token is missing" });
    }

    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.status(500).json({ error: "Error with token" });
      }

      if (decoded.role !== 'admin') {
        return res.status(403).json({ message: "Forbidden: Insufficient role" });
      }

      req.user = decoded;
      next();
    });
  };
};

module.exports = adminAuth;
