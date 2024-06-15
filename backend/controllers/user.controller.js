import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createUser = async (req,res,next)=>{
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

export const login = async (req, res) => {
    const { email, password } = req.body;
    const username = email;
    try {
        const user = await User.findOne({ $or: [{ username }, { email }] });
        if (!user) {
            res.status(401).json({message:"User not found"})
        }
        else {
            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                res.status(401).json({message:"Invalid Password"})
            }
            else {
                console.log(user);
                const token = jwt.sign({ name: user.username }, process.env.JWT_SECRET);
                const { password, updatedAt, __v, createdAt, ...rest } = user._doc;
                res.cookie('client_access_token', "token", { maxAge: 10 * 24 * 60 * 60 * 1000 });
                res.cookie('access_token', token, { httpOnly: true, maxAge: 10 * 24 * 60 * 60 * 1000 }).status(200).json(rest);
            }
        }
    } catch (error) {
        console.log("Error occured in login",error)
    }
}


