const router = require("express").Router();
const AboutModel = require("../models/AboutModel");

//create a About

router.post("/", async (req, res) => {
  // const getItem = await AboutModel.findOne({}).sort({ Aboutid: -1}).limit(1)
  // const id = getItem.Aboutid + 1
  const newPost = new AboutModel(req.body);
  // newPost.Aboutid= id;
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

// find by Object Id
router.get("/Byobject/:_id", async (req, res) => {
  try {
    const about_objectId = await AboutModel.findById(req.params._id);
   res.status(200).json(about_objectId);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:About_name", async (req, res) => {
  try {
    const AboutByname = await AboutModel.findOne({About_name:req.params.About_name});
   res.status(200).json(AboutByname);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update a About
router.put("/:_id", async (req, res) => {
  try {
    const updateAbout = await AboutModel.findById(req.params._id);
      await updateAbout.updateOne({ $set: req.body });
      res.status(200).json("the about has been updated");
      } catch (err) {
    res.status(500).json(err);
  }
});
router.delete("/:_id", async (req, res) => {
  try {
    const AboutDelete = await AboutModel.findById(req.params._id);
      await AboutDelete.deleteOne();
      res.status(200).json("the post has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
