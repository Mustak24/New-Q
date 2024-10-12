import mongoose, { model } from "mongoose";
const {Schema} = mongoose;

const product = new Schema({
    price: {type: String, default: ''},
    img: {type: String, default: ''},
    size: {type: String, default: ''},
    dec: {type: String, default: ''},
    available: Boolean,
    date: {type: Date, default: new Date}
})

mongoose.models = {}
export default mongoose.model('product', product);