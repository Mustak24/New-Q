import connectToDb from "./Middlewares/ConnectToDb";
import Visiter from "./Schemas/Visiter";

async function callback(req, res) {
    try{
        let homeVisiters = await Visiter.find({page: 'HOME'});
        let allVisiters = await Visiter.find({});
        res.json({cout:{Home: homeVisiters.length, All: allVisiters.length}});
    } catch(e){
        res.json({alert:{type: 'error', title: 'Internal server Error'}});
    }
}

export default (req, res) => connectToDb(req, res, callback);