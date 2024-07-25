
import { useState } from "react"
import axiosInstance from "../api"
import { useNavigate } from "react-router-dom"

const AddEmploye =()=>{
    const navigate=useNavigate
    const[fullName, setFullname]=useState("")
    const [phoneNumber,setPhonenumber]=useState("")
    const [email,setEmail]=useState("")
    const [address,setAddress]=useState("")

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const response=await axiosInstance.post("/addEmploye",
            {fullName,phoneNumber,email,address}
        );
        if (response.status==200){
            setFullname("")
            setEmail("")
            setPhonenumber("")
            setAddress("")
            navigate("/getEmployee")
        }

        }catch(err){
            console.log(err)

    }
    };
    return(
        <div>
            <div>
                <div>
                    <h2> Add New Employe</h2>
                </div>
                <div>
                    <div>
                        <lable> Full Name</lable>
                        <input 
                        type="text"
                        placeholder=" your fullName"
                        value={fullName}
                        onChange={(e)=>setFullname(e.target.value)}/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                        type="text"
                         placeholder="Your email @gmail.com"
                         value={ email}
                         onChange={(e)=>setEmail(e.target.value)}
                         />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">Phone Number</label>
                        <span className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500">+251 |</span>
                        <input
                        type="text"
                         placeholder="your phoneNumber"
                         value={ phoneNumber}
                         onChange={(e)=>setPhonenumber(e.target.value)}
                         />
                    </div>
                    <div>
                        <label>Address</label>
                        <input
                        type="text"
                         placeholder="your Address"
                         value={ address}
                         onChange={(e)=>setAddress(e.target.value)}
                         />
                    </div>
                    <div>
                        <button type="button" onClick={handleSubmit}>
                            Add New Employee
                        </button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default AddEmploye