const router = require("express").Router();
const AboutModel = require("../models/AboutModel");

//create a About

router.post("/", async (req, res) => {
  const newPost = new AboutModel(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
    console.log("error")
  }
});

//get all About

router.get("/", async (req, res) => {
  try {
    const abouts = await AboutModel.find();
    res.status(200).json(abouts);
  } catch (err) {
    res.status(500).json(err);
    console.log(" errorr")
  }
});
router.get("/:_id", async (req, res) => {
  try {
    const About_id = await AboutModel.findById(req.params._id);
   res.status(200).json(About_id);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update a About

router.put("/:_id", async (req, res) => {
  try {
    const aboutUpdate = await AboutModel.findById(req.params._id);
      await aboutUpdate.updateOne({ $set: req.body });
      res.status(200).json("the About has been updated");
      } catch (err) {
    res.status(500).json(err);
  }
});
router.delete("/:_id", async (req, res) => {
  try {
    const aboutDelete = await AboutModel.findById(req.params._id);
      await aboutDelete.deleteOne();
      res.status(200).json("the post has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
