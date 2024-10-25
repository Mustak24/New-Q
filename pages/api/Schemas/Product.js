import mongoose, { model } from "mongoose";
const {Schema} = mongoose;

const product = new Schema({
    img: {type: String, default: ''},
    dec: {type: String, default: ''},
    date: {type: Date, default: new Date}
})

mongoose.models = {}
export default mongoose.model('product', product);