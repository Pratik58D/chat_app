import User from "../models/user.model.js";
import bcrypt from "bcryptjs"

const signup =async(req,res)=>{
    const {fullName,email,password} = req.body;
    try {
        if(password.length < 6){
            return res.status(400).json({message :"password must be atleast 6 charecters"});
        }

        const user = await User.findOne([email]);
        if (user) return res.status(400).json({message:"Email already exists."});

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            fullName,
            email,
            password : hashedPassword
        });

        if (newUser) {
            //generate jwt token here
            
        }else{
            res.status(400).json({message: "Invalid user data"});
        }
        
    } catch (error) {
        
    }
}
const login = (req,res)=>{
    res.send("login setup")
}
const logout = (req,res)=>{
    res.send("logout setup")
}

export {signup, login , logout};