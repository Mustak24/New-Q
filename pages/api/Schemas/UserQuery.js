// import connectToDb from "@/Functions/ConnectToDb";
import mongoose from "mongoose";
const {Schema} = mongoose;


const UserQuery =  new Schema({
    name: {type: String},
    contact: {type: String, required: true},
    msg: {type: String, required: true},
    date: {type: Date, default: new Date}
    
})

export default mongoose.models.UserQuery || mongoose.model('UserQuery', UserQuery)


