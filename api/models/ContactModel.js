const mongoose = require('mongoose');
const contact = mongoose.Schema(
  {
    fristname: {
      type: String,
    },
    lastname: {
      type: String,
      max: 500,
    },
    phone_number: {
      type: String,
    },
    email: {
      type: String,
    },
    contact_desc: {
      type:String,
    }
  },
  { timestamps: true }
);


module.exports = mongoose.model("ContactModel", contact);