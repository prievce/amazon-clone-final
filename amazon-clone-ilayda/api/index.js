require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 5000;


const corsOptions = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

// var corsOptions = {
//   origin: process.env.CLIENT_URI,
//   optionsSuccessStatus: 200
// }

const app = express();
const cors = require('cors');
const userController = require("./controllers/userController");
const productController = require("./controllers/productController");
const highlightController = require("./controllers/highlightController");

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/user", userController);
app.use("/api/highlight", highlightController);
app.use("/api/product", productController);


const server = app.listen(port, () => {
  console.log(`Server is started on port ${port}.`);
});

