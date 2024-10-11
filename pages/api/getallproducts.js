import connectToDb from "@/Functions/ConnectToDb";
import Product from "./Schemas/Product";

export default async function(req, res){
    try{
        await connectToDb();
        let porducts = await Product.find()
        res.json({porducts})
    } catch(e){
        console.log(e)
        res.json({alert: {type: 'error', title: 'Server Error', dec: 'Due to internal server error products are not be load !!!'}})
    }
}