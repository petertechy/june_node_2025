const studentModel = require("../models/student.model");

const createNewStudent = (req, res) => {
  // console.log("User Registered")
  console.log("Hello, Welcome to student route");
  console.log(req.body);

  let form = new studentModel(req.body);
  form
    .save()
    .then(() => {
      res.status(201).json({
        status: true,
        message: "Student saved succesfully",
        data: req.body,
      });
    })
    .catch((err) => {
      res.status(400).json({
        status: false,
        message: "Student was not saved",
      });
    });

  //get - read
  //put- rewrites all details
  //patch- rewrites only the detail to be updated
};
const fetchAllstudent = async (req, res) => {
  console.log(req);
  try {
    let allStudent = await studentModel.find();
    if (allStudent) {
      res.status(200).json({
        status: true,
        message: "Student saved succesfully",
        data: allStudent,
      });
    } else {
      res.status(400).json({
        status: false,
        message: "Student was not saved",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Student was not saved",
    });
  }
};
module.exports = {
  createNewStudent,
  fetchAllstudent,
};
