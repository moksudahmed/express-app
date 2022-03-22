const express = require("express");
const adminRouter = express.Router();

adminRouter.get('/', (req, res) =>{
    res.send("Welcome to Admin");
    res.status(200);
});
adminRouter.param('user', (req, res, next, id)=>{
    req.user = id;
    next();
});
adminRouter.get('/user/:user', (req, res) =>{  
    res.send(`Welcome to Admin User ${req.user}`);
    res.status(200);
});

adminRouter.get('/dashboard', (req, res) =>{
    res.send("Welcome to Dashboard");
    res.status(200);
});
adminRouter.get('/login', (req, res) =>{
    res.send("Welcome to Admin Login");
    res.status(200);
});


module.exports = adminRouter;