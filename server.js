import express from "express";

var app = express();

app.get('/', (req, res) => {
    res.send("jeee");
})
app.listen(3000, ()=> {
    console.log("server is running...");
});