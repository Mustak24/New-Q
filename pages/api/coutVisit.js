import connectToDb from "./Middlewares/ConnectToDb"
import Visiter from "./Schemas/Visiter";

async function callback(req, res) {
    let {page, time} = req.query;
    if(!page) return res.status(300).send('No Info');  
    try{
        let ipInfo = await fetch('https://api.ipify.org?format=json');
        let {ip} = await ipInfo.json();
        let visiter = await Visiter.findOne({time, page, ip});
        if(visiter) return res.status(200).send('Already cout');
        await Visiter.create({page, time, ip})
        return res.status(200).send('success');
    } catch(e){
        return res.status(500).send('Internal server Error !!!');
    }
}

export default (req, res) => connectToDb(req, res, callback);