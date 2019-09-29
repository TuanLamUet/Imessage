import express from "express";
import ConnectDB from "./src/config/connectDB";
import ContactModel from "./src/models/contact.model";
var app = express();

//Connect to mongoDB
ConnectDB();

app.get('/test', async (req, res) => {
    try{
        let item = {
            userID: "27011999",
            contactID: "2701100017021100"      
        };
        let contact = await ContactModel.createNew(item); 
        res.send(contact);
    }   catch(err) {
        console.log(err);
    }
});
app.get('/',(req,res)=> {
    res.send('hello');
});

app.listen(process.env.APP_PORT,process.env.APP_HOST, ()=> {
    console.log(`server running on ${process.env.APP_HOST}:${process.env.APP_PORT}`);
});