import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const createUser = async (req,res)=>{
    try {
        const {name,email,username,password,city,district,state,role,skills} =req.body;
    if(!name ||  !password || !username || !city || !district || !state){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered");
    }
    //Hash password
    const hashedPassword = await bcrypt.hash(password,10);

    const user = await User.create({
        name,
        email,
        username,
        city,
        district,
        state,
        password:hashedPassword
    });
    res.json(user);
    if(user){
        res.status(201).json({_id:user.id, email:user.email});
    }else{
        res.status(400)
        throw new Error("User data is not valid");
    }
    } catch (error) {
        console.log("Error occured in createUser",error)
    }
}


