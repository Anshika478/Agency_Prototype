const express = require("express") ;
const app = express() ;
const mongoose = require("mongoose") ;
const path = require("path") ;
const ejsMate = require("ejs-mate") ;


async function main () {
    await mongoose.connect('mongodb://127.0.0.1:27017/Agency')
}

main()
.then(res => {
    console.log("connection successful") ;
})
.catch(err => {
    console.log(err) ;                      
})

app.use(express.urlencoded({extended:true})) ;
app.use(express.json()) ;
app.use(express.static(path.join(__dirname , "/public")))
app.engine('ejs', ejsMate);

app.set("views" , path.join(__dirname , "views")) ;
app.set("view engine" , "ejs")


app.get("/" , (req , res) => {
    res.send("Hi , I am root !")
}) ;

app.get("/aka" , (req , res) => {
    res.render("pages/index.ejs") ;
})

app.get("/aka/call" , (req , res) => {
    res.render("pages/bookingForm.ejs")
})

app.get("/aka/aboutUs" , (req , res) => {
    res.render("pages/aboutUs.ejs")
})

app.listen(8080 , () => {
    console.log("Server is listening to the port !") ;
})