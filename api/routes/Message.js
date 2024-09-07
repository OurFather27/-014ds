const router = require("express").Router();
const MessageModel = require("../models/Message");

//create a Message
router.post("/", async (req, res) => {
  try{
    const {to,  message, name, email}= req.body;
    const newmessage = await MessageModel.create({
      message:message,
      name:name,
      email:email,
      Chatusers:[to]
    })
    return res.status(200).json(newmessage);
  }catch(error){
    return res.status(500).json(" Internal server Error")
  }
});

//get all By Group id
router.get("/:user2Id", async (req, res) => {
  try{
  // const from = req.params.user1Id;
  const speacficGroupId = req.params.user2Id;
  const newmessage =  await MessageModel.find({
    Chatusers:{
      $all:[speacficGroupId]
    }
  }).sort({updatedAt:-1});
  const allmessage = newmessage.map((msg)=>{
    return{
      message : msg.message,
      name: msg.name,
      email: msg.email
    }
  })
  return res.status(200).json(allmessage)
  }catch(error){
    return res.status(500).json(" Internal server Error")
  }
});
// get by Only by name
router.get("/SenderName/:name", async (req, res) => {
  try{
  const newmessage =  await MessageModel.findOne({ name: req.params.name });
  return res.status(200).json(newmessage)
  }catch(error){
    return res.status(500).json(" Internal server Error")
  }
});
router.get("/Senderid/:_id", async (req, res) => {
  try{
  // const from = req.params.user1Id;
  const newmessage =  await MessageModel.findById(req.params._id);
  return res.status(200).json(newmessage)
  }catch(error){
    return res.status(500).json(" Internal server Error")
  }
});

// get By Group speacfic team Id
// router.get("/", async (req, res) => {
//   try{
//   const newmessage =  await MessageModel.find({
//     Chatusers:{
//       $all:[to]
//     }
//   }).sort({updatedAt:-1});
//   const allmessage = newmessage.map((msg)=>{
//     return{
//       message : msg.message
//     }
//   })
//   return res.status(200).json(allmessage)
//   }catch(error){
//     return res.status(500).json(" Internal server Error")
//   }
// });

//get all By Group id
router.get("/:_id", async (req, res) => {
  try {
    const about_objectId = await MessageModel.findById(req.params._id);
   res.status(200).json(about_objectId);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
