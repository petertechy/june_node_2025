const express = require("express");
const router = express.Router();

const {
  createNewStudent,
  fetchAllstudent,
} = require("../controller/student.controller");

router.post("/register", createNewStudent);
router.get("/all-students", fetchAllstudent);

module.exports = router;
