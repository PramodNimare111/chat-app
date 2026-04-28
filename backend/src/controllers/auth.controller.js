import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/utils.js";
import "dotenv/config";
import {ENV} from "../lib/env.js";
import { sendWelcomeEmail } from "../emails/emailHandlers.js";

export const signup = async (req, res) => {
    const { fullName, email, password } = req.body;

    try{
        if(!fullName || !email || !password){
            return res.status(400).json({message: "All fields are required"});
        }
        if(password.length < 6){
            return res.status(400).json({message: "Password must be at least 6 characters"});
        }

        const emailRegix=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegix.test(email)){
            return res.status(400).json({message: "Invalid email"});
        }

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message: "Email already exists"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName: fullName,
            email,
            password: hashedPassword
        });

        if(newUser){
            const savedUser = await newUser.save();
            generateToken(newUser._id, res);
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
            });

            try{
                await sendWelcomeEmail(savedUser.email, savedUser.fullName, process.env.CLIENT_URL);
            }catch(emailError){
                console.error("Error sending welcome email:", emailError);
            }
        }else{
            res.status(400).json({message: "Invalid user data"});
        }
        if(newUser){
            const savedUser = await newUser.save();
            generateToken(newUser._id, res);
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
            });
        }else{
            res.status(400).json({message: "Invalid user data"});
        }
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export const login = async (req,res) => {
    const{email, password}=req.body;

    try{
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message:"Invalid credentials"});

        const isPasswordCorrect = await bcrypt.compare(password.user.password);
        if(!isPasswordCorrect) return res.status(400).json({message:"Invalid credentials"});
        
        generateToken(user._id , res);
        res.status(200).json({
            _id : user._id,
            fullName : user.fullName,
            email : user.email,
            profilePic : user.profilePic,
        });
    }catch(error){
        console.error("Error in login controller", error);
        res.status(500).json({mesage : "Internal server error"});
    }
}

export const logout = (_,res) => {
    res.cookies("jwt","", {maxAge:0});
    res.status(200).json({message : "Logout Successfully"});
}
