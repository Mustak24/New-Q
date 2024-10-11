import connectToDb from "@/Functions/ConnectToDb";
import Product from "./Schemas/Product";

export default async function(req, res){
    try{
        let dbRes = await connectToDb();
        if(!dbRes) return res.json({alert: {type: 'error', title: 'Server Error', dec: 'Due to internal server error products are not be load !!!'}});
        let products = await Product.find()
        return res.json({products})
    } catch(e){
        return res.json({alert: {type: 'error', title: 'Server Error', dec: 'Due to internal server error products are not be load !!!'}})
    }
}