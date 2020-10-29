import React from "react";
import "./Jumbotron.css"

const Jumbotron = () => {
  return (
    <div className="jumbo text-center">
      <h1 className="display-4">Employee Directory</h1>
      <p>
        Click on carrots to filter by heading or use the search box to narrow your results
      </p>
    </div>
  );
};

export default Jumbotron;
