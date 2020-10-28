import React, { Component } from "react";
import Row from "./Row";
import seeds from "./seeds.json";

class Table extends Component {
  render() {
    return (
      <table>
        {seeds.map((person) => (
          <Row
            image={person.image}
            name={person.name}
            email={person.email}
            phone={person.phone}
            dob={person.dob}
          />
        ))}
      </table>
    );
  }
}

export default Table;
