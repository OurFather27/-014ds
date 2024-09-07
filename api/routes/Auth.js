const router = require("express").Router();
const UserModel = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const adminAuth = require('../middleware/AdminAuth');
const moderatorAuth = require('../middleware/ModeratorAuth');
const userAuth = require('../middleware/UserAuth');

router.post("/register", async (req, res) => {
  try {
    // Check if the email already exists
    const existingUser = await UserModel.findOne({ email: req.body.email });
    if (existingUser) {
      console.log({ error: "Email already exists" });
      return res.status(400).json({ error: "Email already exists" });
    }

    // Validate password (example: at least 6 characters)
    if (req.body.password.length < 6) {
      return res.status(400).json({ error: "Password should be at least 6 characters long" });
    }

    // Proceed with user creation
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role || 'user' // Default to 'user' if no role is provided
    });

    const user = await newUser.save();
    res.status(201).json(user); // 201 Created status
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login endpoint
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ email: user.email, role: user.role, id: user._id }, "jwt-secret-key", { expiresIn: '1d' });
      res.cookie('token', token);
        // res.cookie('token', token, { httpOnly: true });
      res.json({ status: "success", role: user.role ,token});
    } else {
      res.status(401).json({ message: "Password incorrect" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// token validation checker  postman header and paste validate token
router.post('/validateToken', userAuth, (req, res) => {
  res.json({ message: "Success" });
});

// Protected route if userAuth
router.get('/dashboard', userAuth, (req, res) => {
  res.json({ message: "Success" });
});
// destroy all token and session
router.post('/clearToken', (req, res) => {
  res.clearCookie('token'); // Clear the token cookie
  res.status(200).json({ message: 'clearToken' });
});
// Current user profile route
// Admin profile route
// Admin profile route
router.get('/admin/profile', adminAuth(), async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Moderator profile route
router.get('/moderator/profile', moderatorAuth(), async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// User profile route
router.get('/user/profile', userAuth(), async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get user by ID
router.get("/:_id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update user by ID
router.put("/:_id", async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(req.params._id, { $set: req.body }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", user: updatedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin-only route
router.get('/admin/dashboard', adminAuth(), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

// Moderator -only route
router.get('/moderator/dashboard', moderatorAuth(), (req, res) => {
  res.json({ message: "moderator" });
});
// User-only route
router.get('/user/dashboard', userAuth(), (req, res) => {
  res.json({ message: "user" });
});

module.exports = router;
