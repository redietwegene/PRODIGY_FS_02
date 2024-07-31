import React from 'react';
import axiosInstance from "../api";
import { useParams,useNavigate } from "react-router-dom";

const DeleteEmploye = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            const response=await axiosInstance.delete(`/delete/${id}`);
            if(response.status===200){
            navigate("/getEmployee"); 
            } // Redirect to the employee list or another page
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <button
            onClick={handleDelete}
            className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
        >
            Delete Employee
        </button>
    );
};

export default DeleteEmploye;
