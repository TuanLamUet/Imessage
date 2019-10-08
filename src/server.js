import express from "express";
import ConnectDB from "./config/connectDB";
import ContactModel from "./models/contactModel";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web"
import bodyParser from "body-parser";
import connectFlash from "connect-flash";
import configSession from "./config/session"
var app = express();

//Connect to mongoDB
ConnectDB();

//Config session
configSession(app);

//Config view engine
configViewEngine(app);

//Enable post data for request
app.use(bodyParser.urlencoded({extended: true}));

//Enable flash messages
app.use(connectFlash());
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