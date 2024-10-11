import connectToDb from "@/Functions/ConnectToDb"
import UserQuery from "./Schemas/UserQuery";

export default async function (req, res){
    try{
        let dbRes = await connectToDb();
        if(!dbRes) return res.json({alert: {type: 'error', title: 'Server Error', dec: 'Due to internal server error products are not be load !!!'}});
        await UserQuery.create(req.body);
        res.json({alert:{type: 'success', title: 'Send', dec: 'Your Qurey will be send.'}})
    } catch(e){
        res.status(500).json({alert:{type: 'error', title: 'Error', dec: 'Due to Internal server error your Query will not be send !!!'}})
    }
}