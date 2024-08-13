import React, { useState } from 'react';
import axiosInstance from "../api";
import { useParams, useNavigate } from "react-router-dom";

const DeleteEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [confirm, setConfirm] = useState(false);

    const handleDelete = async () => {
        try {
            const response = await axiosInstance.delete(`/delete/${id}`);
            if (response.status === 200) {
                navigate("/getEmployee");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Delete Employee</h2>
                {!confirm ? (
                    <div>
                        <p className="mb-4">Are you sure you want to delete this employee?</p>
                        <div className="flex justify-end">
                            <button
                                onClick={() => navigate("/getEmployee")}
                                className="bg-gray-500 text-white p-2 rounded-md mr-2 hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setConfirm(true)}
                                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                            >
                                Delete Employee
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p className="mb-4">Are you sure you want to proceed with deletion?</p>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setConfirm(false)}
                                className="bg-gray-500 text-white p-2 rounded-md mr-2 hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                            >
                                Confirm Delete
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DeleteEmployee;
