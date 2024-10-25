import jwt from 'jsonwebtoken';

export default function (req, res, callback) {
    let {token} = req.headers
    if(!token) return res.json({alert: {type: 'error', title: 'Error', dec: 'Internal server error !!!'}, done: false});
    let data = jwt.verify(token, process.env.JWT_KEY);
    if(data.email == process.env.ADMIN_USERNAME && data.password == process.env.ADMIN_PASSWORD){
        return callback(req, res)
    }
    res.send({verify: false, alert: {type: 'error', title: 'Error', dec: 'Internal server error !!!'}, done: false})
}