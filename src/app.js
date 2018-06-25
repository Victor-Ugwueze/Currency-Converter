const express = require('express');

const path = require('path');

const app = express();

app.use(express.static('dist'));
app.get('/',(req,res)=>{
    res.sendFile('index.html');
})
const port = 3000;

app.listen(port,()=>console.log("App Running on port 3000"));