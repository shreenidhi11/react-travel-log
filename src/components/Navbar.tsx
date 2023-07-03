import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BiWorld } from "@react-icons/all-files/bi/BiWorld";

const Navbar = () => {
  return (
    <div className="navbar">
      
      <span><BiWorld/></span>
      <h3>My Travel Journal</h3>
    </div>
  );
};

export default Navbar;
