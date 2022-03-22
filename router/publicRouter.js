const express = require("express");
const handler = require("../handler");
const publicRouter = express.Router();


publicRouter.get('/',handler);

publicRouter.get('/about',(req,res)=>{
    res.send("Welcome to About Page");
    res.status(200);
});
publicRouter.get('/login', (req, res) =>{
    res.send("Welcome to Anonymous Login");
    res.status(200);
});
publicRouter.get('/user/:id', (req, res) =>{
    res.send("Welcome to Anonymous User");
    res.status(200);
});

module.exports = publicRouter;