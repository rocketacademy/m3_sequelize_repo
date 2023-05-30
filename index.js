const express = require("express");
const app = express();

const db = require("./db/models/index");
const { fruit } = db;

const FruitController = require("./Controllers/FruitController");
const FruitRouter = require("./Routers/FruitRouter");

// setup fruitController instance and fruitRouter instance
const fruitController = new FruitController(fruit);
const fruitRouter = new FruitRouter(fruitController, express);

// Setting up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/fruit", fruitRouter.route());

app.use("/", (req, res) => {
  res.send("Incorrect path");
});

app.listen(8080, () => {
  console.log("Application listening to port 8080");
});
