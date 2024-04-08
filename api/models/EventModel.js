const mongoose = require('mongoose');
const EventDetails = mongoose.Schema(
  {
    Event_title: {
      type: String,
    },
    Event_desc: {
      type: String,
    },
    Event_image: {
      type: String,
      require:true
    },
    Event_date: {
      type: String,
    },
  }
);


module.exports = mongoose.model("Event", EventDetails);