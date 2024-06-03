import React, { useState } from "react";
import Api_Fetch from "../Api_Fetch/Api_Fetch";
import "./header.css";
import { AiOutlineSearch } from "react-icons/ai";
const Header = () => {
  const [input, setInput] = useState('nawaf-vp');
  const handleInput = (e) => {
    let newData=e.target.value;
    setInput(newData);
  };
  return (
    <div className="headerContainer">
      <div className="input_field">
        <AiOutlineSearch />
        <input
          type="text"
          onChange={
            handleInput
          }
          placeholder="Type to search..."
        />
      </div>
       <Api_Fetch username={input} /> 
    </div>
  );
};

export default Header;
