import mongoose, { model } from "mongoose";
const {Schema} = mongoose;

const product = new Schema({
    price: {type: String, default: ''},
    img: {type: String, default: ''},
    available: Boolean,
    size: {type: String, default: ''},
    dec: {type: String, default: ''},
    date: {type: Date, default: new Date}
})

export default mongoose.models.product || mongoose.model('product', product);