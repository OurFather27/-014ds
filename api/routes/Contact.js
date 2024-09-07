const router = require("express").Router();
const ContactModel = require("../models/ContactModel");

//create a Contact
router.post("/", async (req, res) => {
  // const getItem = await ContactModel.findOne({}).sort({ Contactid: -1}).limit(1)
  // const id = getItem.Contactid + 1
    const { fristname, lastname, phone_number, email ,contact_desc} = req.body;
    try {
        const newImage = await ContactModel.create({
            fristname: fristname,
            lastname: lastname,
            phone_number: phone_number,
            email: email,
            contact_desc: contact_desc,
            status:0
        });
        res.json({ status: true });
    } catch (error) {
        res.json({ status: false });
    }
});

//get all Contact
router.get("/", async (req, res) => {
  try {
    const Contacts = await ContactModel.find();
    res.status(200).json(Contacts);
  } catch (err) {
    res.status(500).json(err);
    console.log(" errorr")
  }
});
// by user name get and view
router.get("/:fristname", async (req, res) => {
  try {
    const Byname = await ContactModel.findOne({fristname:req.params.fristname});
   res.status(200).json(Byname);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get latest row count with status 0
router.get('/count/latestMessage', async (req, res) => {
    try {
        const count = await ContactModel.countDocuments({ status: 0 });
        res.json(count);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update notification status
router.put('/SeenMessage', async (req, res) => {
    try {
        await ContactModel.updateMany({ status: 0 }, { $set: { status: 1 } });
        res.json({ status: true });
    } catch (error) {
        res.json({ status: false });
    }
});


router.post("/countAllMessage", async (req, res) => {
  try {
    const count = await ContactModel.countDocuments({});
    console.log(count)
   res.status(200).json(count);
  } catch (err) {
    res.status(500).json(err);
  }
});
// router.post("/count/new", async (req, res) => {
//     try {
//         const { query, since } = req.body; // Get query and since timestamp from request body

//         // Construct a query that includes documents created after the specified date
//         const newQuery = {
//             ...query,
//             createdAt: { $gte: new Date(since) }
//         };

//         const countNewDocuments = await ContactModel.countDocuments(newQuery);
//         res.json({ countNewDocuments });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });
module.exports = router;