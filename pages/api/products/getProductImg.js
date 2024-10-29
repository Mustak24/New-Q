
import connectToDb from "../Middlewares/ConnectToDb"
import Product from "../Schemas/Product"


async function callback(req, res) {
    try{
        let img = await Product.findById(req.query.id)
        res.send(img.img)
    } catch(e){
        res.send('fail')
    }
}

export default (req, res) => connectToDb(req, res, callback)