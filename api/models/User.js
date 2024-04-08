const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	name:String,
	email:String,
	password:String,
	role:{
		type:String,
	default:"visitor"
	}
})
module.exports = mongoose.model("UserModel", UserSchema);