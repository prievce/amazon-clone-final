const express = require("express");
const router = express.Router();
const Cryptr = require("cryptr");
const cryptr = new Cryptr(process.env.CRYPTR_KEY);
const { db } = require("../config/firestore");
const { collection, getDocs, addDoc } = require("firebase/firestore");


router.post("/register", async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;

    const querySnapshot = await getDocs(collection(db, "tbl_user"));
    const users = querySnapshot.docs.map((doc) => doc.data());

    if (!(name && surname && email && password)) {
      res.status(400).send("All input is required");
    }

    const existingUser = await users.find((u) => u.email === email);
    if (existingUser) {
      return res
        .status(200)
        .json({ message: "User already exists", success: false });
    }

    const encryptedPassword = await cryptr.encrypt(password, 10);
    const user = {
      id: new Date().getTime(),
      name,
      surname,
      email,
      password: encryptedPassword,
      createdDate: new Date()
    };

    await addDoc(collection(db, "tbl_user"), {
      ...user,
    });

    res.status(200).json({ body: user, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const querySnapshot = await getDocs(collection(db, "tbl_user"));
    const users = querySnapshot.docs.map((doc) => doc.data());

    if (!(email && password)) {
      res.status(200).send("All input is required");
    }
    const user = await users.find((u) => u.email === email);

    if (user && (password === cryptr.decrypt(user.password))) {
      res.status(200).json({ body: user, success: true });
    } else {
      res.status(200).json({ message: "Invalid Credentials", success: false });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
});

module.exports = router;


