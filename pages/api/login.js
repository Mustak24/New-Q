import jwt from 'jsonwebtoken';

export default async function callback (req, res) {

    try{    
        if(req.method == 'GET') {
            let {token} = req.headers
            if(!token) return res.send({done: false, alert: {type: 'error', title: 'Error', dec: 'Internal server error !!!'}})
                let data = jwt.verify(token, process.env.JWT_KEY);
            if(data.email == process.env.ADMIN_USERNAME && data.password == process.env.ADMIN_PASSWORD){
                return res.send({done: true, alert: {type: 'success', title: 'Welcome'}})
            }
            return res.send({done: false, alert: {type: 'error', title: 'Error', dec: 'Internal server error !!!'}})
        } else{
            let {email, password} = req.body
            if(email == process.env.ADMIN_USERNAME && password == process.env.ADMIN_PASSWORD){
                let token = jwt.sign({email, password}, process.env.JWT_KEY);
                return res.json({alert:{type: 'success', title: 'Login Successfull'}, login: true, token})
            } 
            return res.json({alert:{title: 'Login Fail', type: 'error', dec: 'Invalid Infomation !!!'}, login: false})
        }
    } catch{
        return res.send({done: false, login: false, alert: {type: 'error', title: 'Error', dec: 'Internal server error !!!'}})
    }
}
    
    
