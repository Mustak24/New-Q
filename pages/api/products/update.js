import verifyJwtToken from "../Middlewares/verifyJwtToken";
import connectToDb from "../Middlewares/ConnectToDb"
import Product from "../Schemas/Product";

async function callback(req, res) {
    if(req.method == 'GET') return res.status(404);
    try{
        let {id, dec, img} = req.body;
        if(id){
            await Product.findByIdAndUpdate(id, {dec, img});
            return res.json({alert:{type: 'info', title: 'Product Update', dec: 'Product will be Update in Database.'}, done: true});
        } else {
            let product = await Product.create({dec, img});
            return res.json({alert:{type: 'info', title: 'Product Add', dec: 'Product will be create in Database.'}, done: true, product});
        }
    } catch(e){
        console.log(e)
        return res.json({alert:{type: 'error', title: 'Server Error', dec: 'Some internal server error comes.'}, done: false})
    }
}


const helper = (req, res) => connectToDb(req, res, callback)

export default (req, res) => {
    verifyJwtToken(req, res, helper);
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10mb'
        }
    }
}