import express from "express";
import ConnectDB from "./src/config/connectDB";
import ContactModel from "./src/models/contact.model";
var app = express();

//Connect to mongoDB

ConnectDB();

let hostname = "localhost";
let port = 8017;

app.get('/test', async (req, res) => {
    try{
        let item = {
            userId: "27011999",
            contactID: "2701100017021100",          
        };
        let contact = await ContactModel.createNew(item); 
        res.send(contact);
    }   catch(err) {
        console.log(err);
    }
});

app.listen(port,hostname, ()=> {
    console.log("server is running...");
});