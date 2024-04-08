const router = require("express").Router();
const LocationModel = require("../models/LocationModel");

//create a location

router.post("/", async (req, res) => {
  const newPost = new LocationModel(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
    console.log("error")
  }
});

//get all location

router.get("/", async (req, res) => {
  try {
    const locations = await LocationModel.find();
    res.status(200).json(locations);
  } catch (err) {
    res.status(500).json(err);
    console.log(" errorr")
  }
});
router.get("/:_id", async (req, res) => {
  try {
    const location_id = await LocationModel.findById(req.params._id);
   res.status(200).json(location_id);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update a location

router.put("/:_id", async (req, res) => {
  try {
    const locationUpdate = await LocationModel.findById(req.params._id);
      await locationUpdate.updateOne({ $set: req.body });
      res.status(200).json("the location has been updated");
      } catch (err) {
    res.status(500).json(err);
  }
});
router.delete("/:_id", async (req, res) => {
  try {
    const locationDelete = await LocationModel.findById(req.params._id);
      await locationDelete.deleteOne();
      res.status(200).json("the post has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
