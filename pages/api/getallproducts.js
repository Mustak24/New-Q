import connectToDb from "@/Functions/ConnectToDb";
import Product from "./Schemas/Product";

export default async function(req, res){
    try{
        await connectToDb();
        let porducts = await Product.find()
        res.json(porducts)
    } catch(e){
        console.log(e)
        res.send({res: 'Internal Server Error !!!'})
    }
}