const express = require('express');
const app = new express();
const path = require('path');
app.use(express.static('public'));
app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/home.html");
})
app.listen(3000, ()=> console.log("server is listening..."))