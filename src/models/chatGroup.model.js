import mongoose from "mongoose";

let Schema = mongoose.Schema;

let ChatGroupSchema = new Schema({
   name: String,
   userAmount: {type: Number, min: 3, max: 177}, 
   //id của chủ phòng
   userID: String,
   members: [
       {userID: String}
    ],
    createdAt: {type: Number, default: Date.now},
    updatedAt: {type: Number, default: null},
    deletedAt: {type: Number, default: null}
});
module.exports = mongoose.model("chat-group", ChatGroupSchema);