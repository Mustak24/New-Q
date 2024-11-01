import mongoose from "mongoose";
import { Schema } from "mongoose";

const Visiter = new Schema({
    data: {type: Date, default: new Date},
    page: String,
    time: Number,
    ip: String
});

export default mongoose.models.Visiter || mongoose.model('Visiter', Visiter)