import mongoose, { mongo } from "mongoose";
import { Schema } from "mongoose";

const Visiter = new Schema({
    data: {type: Date, default: new Date},
    page: String,
    time: Number
});

mongoose.models = {}
export default mongoose.model('Visiter', Visiter)