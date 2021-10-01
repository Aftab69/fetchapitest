import { verify } from "jsonwebtoken";
import { findOne } from "../model/userSchema";

const Authenticate = async (req,res,next) =>{
    console.log("hi");
     try{
        const token = req.cookies.jwtoken;
        console.log("token");
        const verifyToken = verify(token, process.env.SECRET_KEY);
        const rootUser = await findOne({_id: verifyToken._id, "tokens.token": token});
        if(!rootUser){ throw new Error("User not found")}
        req.token = token;
        req.rootUser = rootUser;
        req.UserID = rootUser._id;
        next();
     } catch (error) {
         res.status(401).send("Unauthorised:No token provided");
         console.log(error);
     }
};

export default Authenticate;