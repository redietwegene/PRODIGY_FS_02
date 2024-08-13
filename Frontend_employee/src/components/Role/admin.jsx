import React, { useState } from "react";
import AddEmploye from "../Employe/addEmploye";
import { Link } from "react-router-dom";
import NavBar from "./navbar";

const Admin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
    {/* <NavBar/> */}
    <div className=" flex justify-center m-20 "   >
      <div >
        <h1 className="text-2xl font-bold mb-6 ">Admin's Page</h1>
        <button
          onClick={openModal}
          className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          ADD NEW EMPLOYE
        </button>
        <div>
          <AddEmploye isOpen={isModalOpen} onClose={closeModal} />
        </div >
        <div className="bg-blue-600 text-white m-4 p-2 rounded-md hover:bg-blue-700"> 
              
            <Link to={'/getEmployee'}>Employee list  </Link>
        </div>
    
      </div>
     
      </div>
      </div>
  );
};

export default Admin;
