import React from "react";
import {Link} from "react-router-dom"

const Button = ({ title, link }) => {
  return (
    <Link to={link}>
      <button className=" bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">
        {title}
      </button>
    </Link>
  );
};

export default Button;
