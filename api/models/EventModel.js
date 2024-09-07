const mongoose = require('mongoose');
const mongoosesequence = require('mongoose-sequence');

const EventSchema = mongoose.Schema(
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
  },
  { timestamps: true }
);


EventSchema.plugin(mongoosesequence(mongoose), { inc_field: 'Event_id' });

module.exports = mongoose.model("Event", EventSchema);