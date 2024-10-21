import connectToDb from "./Middlewares/ConnectToDb";
import Visiter from "./Schemas/Visiter";

async function callback(req, res) {
    try{
        let cout = await Visiter.find({page: 'HOME'});
        res.json({cout: cout.length});
    } catch(e){
        res.json({alert:{type: 'error', title: 'Internal server Error'}});
    }
}

export default (req, res) => connectToDb(req, res, callback);