const mongoose = require('mongoose');
const About = mongoose.Schema(
  {
    About_name: {
      type: String,
      max:400
    },
    About_desc: {
      type: String,
      max: 500,
    },

  },
);


module.exports = mongoose.model("AboutModel", About);