import mongoose from "mongoose";
import bluebird from "bluebird";

/**
 * Connect to MongoDB
 */

 let connectDB = () => {
     mongoose.Promise = bluebird;
    let URI = `mongodb://localhost:27017/awesome-chat`;
    console.log(URI);

    return mongoose.connect(URI, {useMongoClient: true});
    };

    module.exports = connectDB;