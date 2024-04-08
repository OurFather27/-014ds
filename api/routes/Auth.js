const router = require("express").Router();
const UserModel = require("../models/User");
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')

// Only registration
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)
  }
}); 

//LOGIN and create token
router.post("/login", async (req, res) => {
const {email, password}= req.body;
UserModel.findOne({email:email})
.then(user=>{
	    if(user){
	    	bcrypt.compare(password, user.password, (err, response)=>{
	    		if (response) {
	    		    	const token = jwt.sign({email: user.email, role: user.role},
    		"jwt-secret-key", {expiresIn:'1d'})
    	res.cookie('token', token)
    	return res.json({Status:"success", role:user.role})	
	    		}else{
    	  return  res.status(404).json("The password is incorrect")
    }
	    	})


    }else{
    	return res.json("NO RECORD EXISTED")
    }
})
 })

// if token not create respose error
const verfiyUser =(req, res, next)=>{
	const token = req.cookies.token;
	if(!token){
		return res.json("Token is missing")
	}else{
		jwt.verify(token, "jwt-secret-key", (err, decoded)=>{
			if(err){
				return res.json('Error With token')
			}else{
				if(decoded.role === "admin"){
					next()
				}else {
					return res.json("not admin")
				}
			}
		})
	}
}
router.get('/dashboard' ,verfiyUser, (req, res)=>{
	res.json("Success")
})


////////////////////////////////////////////////
//get all Users

router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
    console.log(" errorr")
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const admin_id = await UserModel.findById(req.params._id);
   res.status(200).json(admin_id);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update a Users

router.put("/:_id", async (req, res) => {
  try {
    const updateUser = await UserModel.findById(req.params._id);
      await updateUser.updateOne({ $set: req.body });
      res.status(200).json("the User has been updated");
      } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
