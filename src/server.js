import express from "express";
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web"
import bodyParser from "body-parser";
import connectFlash from "connect-flash";
import configSession from "./config/session";
import passport from "passport";
import pem from "pem";
import https from "https";

pem.createCertificate({ days: 1, selfSigned: true }, function (err, keys) {
  if (err) {
    throw err
  }
  
let app = express();

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

//Config passport js
app.use(passport.initialize());
app.use(passport.session());
initRoutes(app);

  https.createServer({ key: keys.serviceKey, cert: keys.certificate }, app).listen(process.env.APP_PORT,process.env.APP_HOST, () => {
    console.log(`Server is running at ${process.env.APP_HOST}:${process.env.APP_PORT}`)
  })
})

// var app = express();

// //Connect to mongoDB
// ConnectDB();

// //Config session
// configSession(app);

// //Config view engine
// configViewEngine(app);

// //Enable post data for request
// app.use(bodyParser.urlencoded({extended: true}));

// //Enable flash messages
// app.use(connectFlash());

// //Config passport js
// app.use(passport.initialize());
// app.use(passport.session());
// initRoutes(app);

// app.listen(30000, ()=> {
//     console.log(`server running....`);
// });