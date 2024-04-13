const router = require("express").Router();
const Event = require("../models/EventModel");

//create a Event

router.post("/", async (req, res) => {
  const newPost = new Event(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all Events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json(err);
    console.log(" errorr")
  }
});
// Event View or get by Event id  admin and client 
router.get("/:Event_id", async (req, res) => {
  try {
    const Eventid = await Event.findOne(req.body.Event_id);
   res.status(200).json(Eventid);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update a Event
router.put("/:_id", async (req, res) => {
  try {
    const updateEvent = await Event.findById(req.params._id);
      await updateEvent.updateOne({ $set: req.body });
      res.status(200).json("the Event has been updated");
      } catch (err) {
    res.status(500).json(err);
  }
});
router.delete("/:_id", async (req, res) => {
  try {
    const DeleteEvent = await Event.findById(req.params._id);
      await DeleteEvent.deleteOne();
      res.status(200).json("the post has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
