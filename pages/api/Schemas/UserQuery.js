
import mongoose from "mongoose";
const {Schema} = mongoose;


const UserQuery =  new Schema({
    name: {type: String},
    contact: {type: String, required: true},
    msg: {type: String, required: true},
    date: {type: Date, default: new Date}  
})

mongoose.models = {}
export default  mongoose.model('UserQuery', UserQuery)


