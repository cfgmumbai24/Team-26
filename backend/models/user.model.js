import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        min: 2,
        max: 100,
      },
      email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        min: 8,
      },
      username:{
        type:String,
        required:true,
        unique:true
      },
      city:{
        type:String,
        required:true,
      },
      district:{
        type:String,
        required:true
      },
      state:{
        type:String,
        required:true,
      },
      role: {
        type: String,
        enum: ["adventurer", "explorer", "pioneer"],
        default: "adventurer",
      },
      skills:{
        type:[{type:String}]
      }
    },
    { timestamps: true }
  );
  
  const User = mongoose.model("User", UserSchema);
  export default User;