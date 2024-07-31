import { Employee } from "../model.js";
import mongoose from 'mongoose';


const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

const addEmploye = async(req,res)=>{
    try{
        var today=new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yy = today.getFullYear();
        if (dd<10){
            dd="0"+dd;
        }
        if (mm<10){
            mm="0"+mm
        }
       const dateOfJoining=dd+"/"+mm+"/"+yy

        const employe = new Employee({
            fullName:req.body.fullName,
            phoneNumber:req.body.phoneNumber,
            email:req.body.email,
            address:req.body.address,
            dateOfJoining:dateOfJoining
        })
        await employe.save();
        res.sendStatus(200);

    }catch(error){
        console.log(error)
    }

}
const getEmploye = async(req ,res)=>{
    try{
        const employe= await Employee.find()
        res.status(200).json(employe)
    }catch(err){
        console.log(err)
    }
}

const editEmploye = async (req, res) => {
    const { id } = req.params;
    

    
    if (!isValidObjectId(id)) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    try {
        const employee = await Employee.findById(id); 

        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        res.status(200).json(employee); 
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
};

const updatedEmploye = async( req,res)=>{
    const { id } = req.params;
    const { fullName, phoneNumber, email, address } = req.body;
    if (!isValidObjectId(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
    }
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(
            id,
            { fullName, phoneNumber, email, address },
            { new: true, runValidators: true }
        );
        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(updatedEmployee);
    } catch(err){
        console.log(err)
    }


};
const deleteEmploye =async(req,res)=>{
    const{id} =req.params

    if (!isValidObjectId(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
    }
    try{
        const deleteEmployee =await Employee.findByIdAndDelete(id);
        res.sendStatus(200);

        if (!deleteEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
    }catch(err){
        console.log(err)
    }
}

export {addEmploye, getEmploye,editEmploye ,updatedEmploye,deleteEmploye};