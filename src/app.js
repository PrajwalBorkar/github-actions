const express = require('express');
const app =express()

app.get("/testNode" ,(_req,res) =>{
    res.status(200).send("Msg Sent");
})

module.exports = app;
