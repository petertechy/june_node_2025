const mongoose = require("mongoose");

let studentSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});

let studentModel = mongoose.model("student_collection", studentSchema);

module.exports = studentModel


//EcmaScript export || CommonJs Export