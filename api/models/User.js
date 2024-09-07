const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
    trim: true,
  },
	email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
	  profilePicture: {
	  type: String,
	  default: "",
	},
	desc: {
	  type: String,
	  max: 50,
	  default: "",
	},
	city: {
	  type: String,
	  max: 50,
	  default: "",	  
	},
	from: {
	  type: String,
	  max: 50,
	  default: "",	  
	},
	relationship: {
	  type: Number,
	  enum: [1, 2, 3],
	},
  role: {
    type: String,
    enum: ['user', 'admin' ,'moderator'],
    default: 'user',
  },
},
{ timestamps: true }
)
module.exports = mongoose.model("UserModel", UserSchema);