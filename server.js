import express from "express";
import ConnectDB from "./src/config/connectDB";
import ContactModel from "./src/models/contact.model";
import configViewEngine from "./src/config/viewEngine";
import initRoutes from "./src/routes/web"
import bodyParser from "body-parser";
var app = express();

//Connect to mongoDB
ConnectDB();

//Config view engine
configViewEngine(app);

//Enable post data for request
app.use(bodyParser.urlencoded({extended: true}));

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

initRoutes(app);

app.listen(30000, ()=> {
    console.log(`server running....`);
});