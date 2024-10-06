import connectToDb from "@/Functions/ConnectToDb"
import Product from "./Schemas/Product";

export default async function (req, res){
    try{
        console.log(req.body)
        await connectToDb();
        let query = await Product.create(req.body);
        res.send({res: 'Send successfully',query})
    } catch(e){
        console.log(e);
        res.status(500).send({res: 'Error',error:e})
    }
}