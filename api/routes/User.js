const router = require("express").Router();
const UserModel = require("../models/User");

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
router.get('/:_id', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params._id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});
// Update a user
router.put('/:_id', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params._id);
        await user.updateOne({ $set: req.body });
        res.status(200).json('The user has been updated');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
