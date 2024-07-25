
import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: { type:String,required:true},
  refreshToken: { type: String }
  
});
const employeSchema = new mongoose.Schema({
  fullName:{type:String,required:true},
  phoneNumber:{type:String,required:true},
  email:{type:String,required:true},
  address:{type:String,required:true},
  dateOfJoining:{type:String}
});

const Employee=mongoose.model("Employee",employeSchema)
const User =mongoose.model('User' ,userSchema)
export {User,Employee};
