const mongoose = require('mongoose');
const EventDetails = mongoose.Schema(
  {
    desc: {
      type: String,
    },
    img: {
      type: String,
    }
  }
);


module.exports = mongoose.model("Event", EventDetails);