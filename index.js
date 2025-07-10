const express = require("express")
const app = express()
const PORT = 5001
const ejs = require("ejs")
const mongoose = require("mongoose")
app.set("view engine", "ejs")
//bodyparser - parse(convert) - parseInt, parseFloat
app.use(express.urlencoded({extended: true}))
//Templating engine - ejs
//Uniform Resource Identifier
//Uniform Resource Locator

const URI = "mongodb+srv://petertechy01:mongodb@my-project.w3cyijl.mongodb.net/student_db?retryWrites=true&w=majority&appName=my-project"
mongoose.connect(URI)
.then(()=>{
    console.log("Mongodb has connected successfully")
})
.catch((error)=>{
    console.log("Mongodb no gree connect")
    console.log(error)
})

let studentSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
})

let studentModel = mongoose.model("student_collection", studentSchema)



const endPoint = [
    {firstName: "Olanrewaju", lastName: "SQI"},
    {firstName: "Emmanuel", lastName: "SQI"},
    {firstName: "Okiki", lastName: "SQI"},
    {firstName: "Dapo", lastName: "SQI"},
    {firstName: "Adeola", lastName: "SQI"},
    {firstName: "John", lastName: "SQI"},
    {firstName: "Azeem", lastName: "SQI"},
]

const allUsers = []

app.get("/", (request, response)=>{
    // response.send("<h1>This is my landing page</h1>")
    // response.send("This is my landing page")
    // response.send(endPoint)
    response.render("index")
})

app.get("/signup", (req, res)=>{
    res.render("signup")

})

app.get("/about", (req, res)=>{
    // console.log("About page is here")
    // res.send("Welcome to About Page")
    res.sendFile(__dirname + "/fish.html")
    console.log(__dirname)
    // C:\Users\PC\Desktop\Current Class\Level 3 June Cohort\Node\second\fish.html
})

app.get("/contact", (req, res)=>{
    res.sendFile(__dirname + "/contact.html")
})

app.post("/register",(req, res)=>{
    // console.log("User Registered")
    console.log(req.body)
    let form = new studentModel(req.body)
    form.save()
    .then(()=>{
        res.redirect("/dashboard")
        
    })
    .catch((err)=>{
        res.send("An error occurred")
    })
    
    // res.send("You have registered successfully")
    // allUsers.push(req.body)
})

app.get("/dashboard", async (req, res)=>{
    // res.render("dashboard", {name: "Azeem", gender: "female", allUsers})
    try{
        let allUsers = await studentModel.find();
        res.render("dashboard",{name: "Azeem", gender: "female", allUsers})
    }
    catch(error){
        console.log(error)
        res.render("Unable to Fetch Users")
    }
})

app.listen(PORT, (err)=>{
    if(err){
        console.log(`There is an error ${err}`)
    }else{
        console.log(`Server has started on Port: ${PORT}`)
    }
})