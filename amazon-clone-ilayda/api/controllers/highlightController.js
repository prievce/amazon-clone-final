const express = require("express");
const router = express.Router();
const { db } = require("../config/firestore");
const { collection, getDocs, addDoc } = require("firebase/firestore");


router.get("/list", async (req, res) => {
  try {
    const querySnapshot = await getDocs(collection(db, "tbl_highlight"));
    const highlights = querySnapshot.docs.map((doc) => doc.data());

    res.status(200).json({ body: highlights, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
});

router.post("/create", async (req, res) => {
    try {
      const {image } = req.body;
      const highlight = {
        id: new Date().getTime(),
        image
      };
  
      await addDoc(collection(db, "tbl_highlight"), {
        ...highlight,
      });
      res.status(200).json({ body: highlight, success: true });
    } catch (error) {
      res.status(500).json({ message: error.message, success: false });
    }
  });

module.exports = router;


