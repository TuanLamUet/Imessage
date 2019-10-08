import session from "express-session";
import connectMongo from "connect-mongo";

let MongoStore = connectMongo(session);

/**
 * this variable is where save session , in this case is mongodb
 */
let sessionStore = new MongoStore({
    url: `mongodb://localhost:27017/awesome-chat`,
    autoReconnect: true,
    //autoRemove: "native"
})
let configSession = (app) => {
    app.use(session({
        key: "express.sid",
        secret: "mySecret",
        store:sessionStore,
        resave: true,
        saveUninitiallized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 // 86000000 seconds = 1 day
        }
    }));
};

module.exports = configSession;