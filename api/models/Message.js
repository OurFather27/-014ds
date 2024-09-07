const mongoose = require('mongoose');
const mongoosesequence = require('mongoose-sequence');

const MessageSchema = mongoose.Schema(
  {
    Chatusers:{
      type:Array,
      require:true
    },
    message:{
      type:String,
      require:true
    },
    name:{
      type:String,
      require:true
    },
    email:{
      type:String,
      require:true
    },
    
  },
    { timestamps: true }
);


module.exports = mongoose.model("MessageModel", MessageSchema);