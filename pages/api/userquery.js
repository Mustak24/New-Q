import connectToDb from "@/Functions/ConnectToDb"
import UserQuery from "./Schemas/UserQuery";

export default async function (req, res){
    try{
        await connectToDb();
        await UserQuery.create(req.body);
        res.json({alert:{type: 'success', title: 'Send', dec: 'Your Qurey will be send.'}})
    } catch(e){
        res.status(500).json({alert:{type: 'error', title: 'Error', dec: 'Due to Internal server error your Query will not be send !!!'}})
    }
}