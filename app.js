const express=require("express");
const app=express();

const PORT=3000;

//telling node js to set its view engine to ejs
app.set('view enjine','ejs')

//home page
app.get("/",(req,res)=>{
  res.render("home.ejs")
})
// script vatra kahya paxi chai npm start hanna parxa la guyss
app.listen(PORT,()=>{
    console.log("node js project has satrted at this" + PORT);
});