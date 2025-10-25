import jwt from 'jsonwebtoken';

export default function (req, res, callback) {
    let {token} = req.headers
    if(!token) return res.json({alert: {type: 'error', title: 'Error', dec: 'Internal server error !!!'}, done: false});
    let data = jwt.verify(token, process.env.JWT_KEY);
    if(data.email == '1234567890' && data.password == '1234567890'){
        return callback(req, res)
    }
    res.send({verify: false, alert: {type: 'error', title: 'Error', dec: 'Internal server error !!!'}, done: false})
}
