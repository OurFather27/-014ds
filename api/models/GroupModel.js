const mongoose = require('mongoose');
const mongoosesequence = require('mongoose-sequence');
const Group = mongoose.Schema(
  {
    group_name: {
      type: String,
      max:400
    },
    group_title: {
      type: String,
      max:400
    },
    group_desc: {
      type: String,
      max: 500,
    },
    group_image: {
      type: String,
      max: 500,
    },    
    group_cover_image: {
      type: String,
      max: 500,
    },
    group_status: {
      type: String,
      max: 500,
    },    
  },
  { timestamps: true }
);
Group.plugin(mongoosesequence(mongoose), { inc_field: 'Group_id' });
module.exports = mongoose.model("GroupModel", Group);