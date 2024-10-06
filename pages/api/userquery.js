import connectToDb from "@/Functions/ConnectToDb"
import UserQuery from "./Schemas/UserQuery";

export default async function (req, res){
    try{
        await connectToDb();
        let query = await UserQuery.create(req.body);
        res.send({res: 'Send successfully',query})
    } catch(e){
        console.log(e);
        res.status(500).send({res: 'Error',error:e})
    }
}