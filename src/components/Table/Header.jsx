import React from "react";

const Header = ({handleNameSort, icon}) => {
  return (
    <tr>
      <th onClick={()=> {console.log("click")}}>Image</th>
      <th onClick={()=> {handleNameSort()}}>Name<i className={icon}></i></th>
      <th onClick={()=> {console.log("click")}}>Phone</th>
      <th onClick={()=> {console.log("click")}}>Email</th>
      <th onClick={()=> {console.log("click")}}>DOB</th>
    </tr>
  );
};

export default Header;
