const handler = (req, res) =>{
    console.log("Hello from Handler");
    res.send("Welcome to Home Page");
}

module.exports = handler;