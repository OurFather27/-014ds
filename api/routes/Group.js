const router = require("express").Router();
const Group = require("../models/GroupModel");

//create a Group

router.post("/", async (req, res) => {
  const newPost = new Group(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all Groups
router.get("/", async (req, res) => {
  try {
    const groups = await Group.find();
    res.status(200).json(groups);
  } catch (err) {
    res.status(500).json(err);
    console.log(" errorr")
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const group_id = await Group.findById(req.params._id);
   res.status(200).json(group_id);
  } catch (err) {
    res.status(500).json(err);
  }
});
//POST a GROUP By Id
router.post("/:_id", async (req, res) => {
  try {
    const group_id = await Group.findById(req.params._id);
    await group_id.save(req.body);
   res.status(200).json(group_id);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update a About

router.put("/:_id", async (req, res) => {
  try {
    const updateGroup = await Group.findById(req.params._id);
      await updateGroup.updateOne({ $set: req.body });
      res.status(200).json("the Group has been updated");
      } catch (err) {
    res.status(500).json(err);
  }
});
router.delete("/:_id", async (req, res) => {
  try {
    const DeleteGroup = await Group.findById(req.params._id);
      await DeleteGroup.deleteOne();
      res.status(200).json("the post has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
