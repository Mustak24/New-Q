
import connectToDb from "../Middlewares/ConnectToDb";
import UserQuery from "../Schemas/UserQuery";
import verifyJwtToken from "../Middlewares/verifyJwtToken";

async function callback(req, res) {
    try{
        let query = await UserQuery.findByIdAndDelete(req.query.id)
        if(query) return res.json({alert: {type: 'success', title: 'Deleted', dec: `Query that id is ${query._id} will be deleted`}, remove: true});
    } catch(e) {
        res.json({alert: {type: 'error', title: 'Server Error', dec: 'Due to Internal server error query will not be deleted !!'}, remove: false});
    }

}


const helper = (req, res) => connectToDb(req, res, callback)

export default (req, res) => {
    verifyJwtToken(req, res, helper);
}