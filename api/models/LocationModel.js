const mongoose = require('mongoose');
const LocationSchema = mongoose.Schema(
  {
    Location_name: {
      type: String,
      max:400
    },
    Location_image: {
      type: String,
      max: 500,
    },
    Location_Address: {
      type: String,
      max: 500,
    },
    Location_phone: {
      type: String,
      max: 500,
    },
    Location_email: {
      type: String,
      max: 500,
    },
    Location_map: {
      type: String,
      max: 500,
    }
  },
);


module.exports = mongoose.model("Location", LocationSchema);