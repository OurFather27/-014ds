const mongoose = require('mongoose');
const mongoosesequence = require('mongoose-sequence');

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

About.plugin(mongoosesequence(mongoose), { inc_field: 'About_id' });

module.exports = mongoose.model("AboutModel", About);