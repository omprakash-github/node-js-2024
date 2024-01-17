const express = require("express"); //requiring express package
const app = express(); //strong it in app;


//koi la / hanyo vane k dakune ho vanarw herna lai ho
app.get('/', (req,res) => {
  res.send("hello world")
});

app.get('/about', (req,res) => {
    res.send("my name is omprakash lamichahen");
  });
//port number vanako hamro room number jastai raixa hai
app.listen(3001, () => {
  console.log("Node js project has  running in port 3001");
});
