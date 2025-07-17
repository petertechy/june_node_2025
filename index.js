const express = require("express");
const app = express();
require("dotenv").config();
const ejs = require("ejs");
const mongoose = require("mongoose");
app.set("view engine", "ejs");
const studentRouter = require("./routes/student.route");
const cors = require("cors");

//bodyparser - parse(convert) - parseInt, parseFloat
// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/student", studentRouter);
//Templating engine - ejs
//Uniform Resource Identifier
//Uniform Resource Locator

// Variable Declaration
const PORT = process.env.PORT;
const URI = process.env.URI;

//MVC - Model, Views, Controls, Route

mongoose
  .connect(URI)
  .then(() => {
    console.log("Mongodb has connected successfully");
  })
  .catch((error) => {
    console.log("Mongodb no gree connect");
    console.log(error);
  });

const endPoint = [
  { firstName: "Olanrewaju", lastName: "SQI" },
  { firstName: "Emmanuel", lastName: "SQI" },
  { firstName: "Okiki", lastName: "SQI" },
  { firstName: "Dapo", lastName: "SQI" },
  { firstName: "Adeola", lastName: "SQI" },
  { firstName: "John", lastName: "SQI" },
  { firstName: "Azeem", lastName: "SQI" },
];

const allUsers = [];

app.get("/", (request, response) => {
  // response.send("<h1>This is my landing page</h1>")
  // response.send("This is my landing page")
  // response.send(endPoint)
  response.render("index");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/about", (req, res) => {
  // console.log("About page is here")
  // res.send("Welcome to About Page")
  res.sendFile(__dirname + "/fish.html");
  console.log(__dirname);
  // C:\Users\PC\Desktop\Current Class\Level 3 June Cohort\Node\second\fish.html
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/dashboard", async (req, res) => {
  // res.render("dashboard", {name: "Azeem", gender: "female", allUsers})
  try {
    let allUsers = await studentModel.find();
    res.render("dashboard", { name: "Azeem", gender: "female", allUsers });
  } catch (error) {
    console.log(error);
    res.render("Unable to Fetch Users");
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`There is an error ${err}`);
  } else {
    console.log(`Server has started on Port: ${PORT}`);
  }
});
