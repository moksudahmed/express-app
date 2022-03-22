const express = require("express");
const handler = require("./handler");
const app = express();
const admin = express();
const adminRouter = require("./router/adminRouter");
const publicRouter = require("./router/publicRouter");
const port = 3000;

// app.use('/admin', adminRouter);
// app.use('/', publicRouter);
app.get('/', (req, res)=>{
    res.send(a);
});

// Error Handling

app.use((err, req,res,next) =>{
    if(err.message){
        res.status(500).send(err.message);
    }
    else{
        res.status(500).send("There are an error!");
    }
});

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});
