import UserQuery  from "../Schemas/UserQuery";
import connectToDb from "../Middlewares/ConnectToDb";
import verifyJwtToken from "../Middlewares/verifyJwtToken";

async function callback(req, res) {
    try{
        let querys = await UserQuery.find();
        res.json({querys})
    } catch(e){
        res.json({alert:{type: 'error', title: 'Server Error'}})
    }
}

const helper = (req, res) => connectToDb(req, res, callback)

export default (req, res) => {
    verifyJwtToken(req, res, helper);
}