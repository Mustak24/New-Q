
import connectToDb from "../Middlewares/ConnectToDb";
import Product from "../Schemas/Product";

async function callback(req, res){
    try{
        let products = await Product.find({}).select({img: 0})
        return res.status(200).json({products})
    } catch(e){
        return res.status(500).json({alert: {type: 'error', title: 'Server Error', dec: 'Due to internal server error products are not be load !!!'}})
    }
}

export default (req, res) => connectToDb(req, res, callback);