import connectToDb from "@/Functions/ConnectToDb"
import Product from "./Schemas/Product";

export default async function (req, res){
    try{
        console.log(req.body)
        await connectToDb();
    } catch(e){
        console.log(e);
    }
}