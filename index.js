const express = require("express")
const app = express()
const PORT = 5001
const ejs = require("ejs")
app.set("view engine", "ejs")
//bodyparser - parse(convert) - parseInt, parseFloat
app.use(express.urlencoded({extended: true}))
//Templating engine - ejs

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
    console.log("User Registered")
    // res.send("You have registered successfully")
    console.log(req.body)
    allUsers.push(req.body)
    res.redirect("/dashboard")
})

app.get("/dashboard", (req, res)=>{
    res.render("dashboard", {name: "Azeem", gender: "female", allUsers})
})

app.listen(PORT, (err)=>{
    if(err){
        console.log(`There is an error ${err}`)
    }else{
        console.log(`Server has started on Port: ${PORT}`)
    }
})