import userModel from "../models/userModel.js"
import validator from "validator";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

// Route for user login
async function loginUser(req,res){
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"User does not Exist"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch){
            const token = createToken(user._id);
            res.json({success:true,token});
        }
        else{
            res.json({success:false,message:"Invalid Credential"});
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

// Route for user registration
async function registerUser(req, res){
    try {
        const {name ,email, password} = req.body;
        // User already exist or not
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User already Exists"});
        }
        // Validating the email and Strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a Valid Email"});
        }
        // Password Validation
        if(password.length < 8 ){
            return res.json({success:false,message:"Enter the a Strong Password"});
        }
        // Hashing the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })

        const user = await newUser.save();
        const token = createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// Router for Admin login
async function adminLogin(req, res){
}

export {loginUser, registerUser, adminLogin};