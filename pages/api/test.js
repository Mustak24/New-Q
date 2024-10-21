import connectToDb from "./Middlewares/ConnectToDb";
import Visiter from "./Schemas/Visiter";

async function callback (req, res) {
    let cout = await Visiter.find({})
    res.json({cout});
}


export default (req, res) => connectToDb(req, res, callback)