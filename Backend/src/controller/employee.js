import { Employee } from "../model.js";

const addEmploye = async(req,res)=>{
    try{
        var today=new Date();
        var dd = today.getDate();
        var mm = today.getMonth();
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

export {addEmploye};