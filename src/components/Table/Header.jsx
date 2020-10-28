import React from "react";

const Header = () => {
  return (
    <tr>
      <th onClick={()=> {console.log("click")}}>Image</th>
      <th onClick={()=> {console.log("click")}}>Name</th>
      <th onClick={()=> {console.log("click")}}>Phone</th>
      <th onClick={()=> {console.log("click")}}>Email</th>
      <th onClick={()=> {console.log("click")}}>DOB</th>
    </tr>
  );
};

export default Header;
