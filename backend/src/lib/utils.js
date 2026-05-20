import jwt from "jsonwebtoken";

export const generateToken = (userId,res) => {
    const{JWT_SECRET} = process.env;
    if(!JWT_SECRET){
        throw new Error("JWT_SECRET is not defined in environment variables");
    }

    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '7d'});
    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
        httpOnly: true,
        secure: process.env.NODE_ENV === "development" ? false : true, // cookie over https in production
        sameSite: process.env.NODE_ENV === "development" ? "lax" : "none" // relax sameSite in dev, use none in prod for cross-site
    }); 

    return token;
};