const express = require("express");
const router = express.Router();
const { db } = require("../config/firestore");
const { collection, getDocs, addDoc } = require("firebase/firestore");


router.get("/list", async (req, res) => {
  try {
    const querySnapshot = await getDocs(collection(db, "tbl_product"));
    const products = querySnapshot.docs.map((doc) => doc.data());

    res.status(200).json({ body: products, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
});

router.post("/detail", async (req, res) => {
  try {
    const { id } = req.body;
    
    const querySnapshot = await getDocs(collection(db, "tbl_product"));
    const products = querySnapshot.docs.map((doc) => doc.data());
    const product = await products.find((i) => i.id === Number(id));


    res.status(200).json({ body: product, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
});

router.post("/create", async (req, res) => {
    try {
      const { name, view, about, price, vote, colors, highlight, image } = req.body;
  
      const product = {
        id: new Date().getTime(),
        name,
        view,
        about,
        price,
        vote,
        colors,
        createdDate: new Date(),
        highlight,
        image
      };
  
      await addDoc(collection(db, "tbl_product"), {
        ...product,
      });
  
      res.status(200).json({ body: product, success: true });
    } catch (error) {
      res.status(500).json({ message: error.message, success: false });
    }
  });

module.exports = router;


