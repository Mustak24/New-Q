
import connectToDb from "../Middlewares/ConnectToDb"
import UserQuery from "../Schemas/UserQuery";

async function callback (req, res){
    if(req.method == 'GET') return res.status(404);
    try{
        await UserQuery.create(req.body)
        res.status(200).json({alert:{type: 'success', title: 'Send', dec: 'Your Qurey will be send.'}})
    } catch(e){
        res.status(500).json({alert:{type: 'error', title: 'Error', dec: 'Due to Internal server error your Query will not be send !!!'}})
    }
}

export default (req, res) => connectToDb(req, res, callback);

