import connectToDb from "../Middlewares/ConnectToDb"
import verifyJwtToken from "../Middlewares/verifyJwtToken"
import Product from "../Schemas/Product"

async function callback(req, res) {
    try{
        let product = await Product.findByIdAndDelete(req.query.id)
        if(product) return res.json({alert: {type: 'success', title: 'Deleted', dec: `Product that id is ${product._id} will be deleted`}, remove: true});
    } catch(e) {
        res.json({alert: {type: 'error', title: 'Server Error', dec: 'Due to Internal server error product will not be deleted !!'}, remove: false});
    }
}

const helper = (req, res) => connectToDb(req, res, callback)


export default (req, res) => {
    verifyJwtToken(req, res, helper);
}