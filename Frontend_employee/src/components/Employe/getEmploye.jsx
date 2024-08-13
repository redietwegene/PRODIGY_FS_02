import { useEffect, useState } from "react";
import axiosInstance from "../api";
import { Link } from "react-router-dom";

const GetEmployee =()=>{
    const [employlist,setEmployeList]=useState([])
    useEffect(() => {
        const fetchEmployees = async () => {
          try {
            const response = await axiosInstance.get("/getEmploye");
            setEmployeList(response.data);
            
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchEmployees();
      }, []);


    return(
        <div>
          <div >
          <table className="mb-40">
            <thead>
                <tr>
                   <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-600">Full Name</th>
                    <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-600">Email</th>
                     <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-600">Phone Number</th>
                    <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-600">Address</th>
                     <th className="py-2 px-4 bg-gray-200 font-semibold text-gray-600">Date of Joining</th>
                 </tr>

            </thead>
            <tbody>
            {employlist.map((employee, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{employee.fullName}</td>
              <td className="py-2 px-4 border-b">{employee.email}</td>
              <td className="py-2 px-4 border-b">{employee.phoneNumber}</td>
              <td className="py-2 px-4 border-b">{employee.address}</td>
              <td className="py-2 px-4 border-b">{employee.dateOfJoining}</td>
              <td className="px-4"><Link to={`/edit/${employee._id}`} > Edit </Link> </td>
              <td className="px-4"><Link to={`/delete/${employee._id}`} >Delete</Link></td>
             
              
            </tr>
          ))}


                </tbody>
          </table>
                  <Link className="bg-sky-400 p-2 rounded-md " to="/admin">Back to Home</Link>
        </div>

        </div>
    )
}

export default GetEmployee;