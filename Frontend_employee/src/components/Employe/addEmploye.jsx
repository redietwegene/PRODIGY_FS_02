import React, { useState } from "react";
import axiosInstance from "../api";
import { useNavigate } from "react-router-dom";

const AddEmploye = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [fullName, setFullname] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/addEmploye", {
        fullName,
        phoneNumber,
        email,
        address,
      });
      if (response.status === 200) {
        setFullname("");
        setEmail("");
        setPhonenumber("");
        setAddress("");
        onClose();
        navigate("/getEmployee");
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Add New Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Your full name"
              value={fullName}
              onChange={(e) => setFullname(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <span className="absolute top-8 left-3 text-gray-500">+251 |</span>
            <input
              type="text"
              placeholder="Your phone number"
              value={phoneNumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              className="mt-1 block w-full p-2 pl-16 border  border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            />

          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              placeholder="Your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white p-2 rounded-md mr-2 hover:bg-red-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-700 text-white p-2 rounded-md hover:bg-blue-800"
            >
              Add New Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmploye;
