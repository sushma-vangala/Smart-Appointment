import jwt from "jsonwebtoken";

//provider authentication middleware
const authProvider = async (req, res, next) => {
    try {
        
        const {ptoken} = req.headers;

        if(!ptoken) {
            return res.json({ success: false, message: "Not Authorized Login Again" });
        }
        const token_decode = jwt.verify(ptoken, process.env.JWT_SECRET);
        if(req.method === 'POST'){
            req.body.provId = token_decode.id
        } else {
            req.provId = token_decode.id
        }
        next();

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}
export default authProvider;