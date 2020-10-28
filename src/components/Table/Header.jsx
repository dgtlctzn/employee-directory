import React from "react";

const Header = ({handleNameSort}) => {
  return (
    <tr>
      <th onClick={()=> {console.log("click")}}>Image</th>
      <th onClick={()=> {handleNameSort()}}>Name</th>
      <th onClick={()=> {console.log("click")}}>Phone</th>
      <th onClick={()=> {console.log("click")}}>Email</th>
      <th onClick={()=> {console.log("click")}}>DOB</th>
    </tr>
  );
};

export default Header;
