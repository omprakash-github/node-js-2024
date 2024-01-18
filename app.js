const express = require("express"); //requiring express package
const app = express(); //strong it in app;

//ejs use garna kojako so set garako hai; 
app.set("view enjine","ejs")

//koi la / hanyo vane k dakune ho vanarw herna lai ho
app.get('/', (req,res) => {
  //render la chai kun file dakune vanrw dinxa hai
  res.render("home.ejs");
});

app.get('/about', (req,res) => {
    res.send("my name is omprakash lamichahen");
  });
//port number vanako hamro room number jastai raixa hai
app.listen(3001, () => {
  console.log("Node js project has  running in port 3001");
});

//nodemon install garako kinake yasla hamlai auto server run garna help garxa