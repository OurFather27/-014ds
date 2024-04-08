const mongoose = require('mongoose');
const Group = mongoose.Schema(
  {
    group_name: {
      type: String,
      max:400
    },
    group_title_1: {
      type: String,
      max:400
    },
    img: {
      type: String,
      max: 500,
    },
    group_description: {
      type: String,
      max: 500,
    },


  },
);


module.exports = mongoose.model("GroupModel", Group);