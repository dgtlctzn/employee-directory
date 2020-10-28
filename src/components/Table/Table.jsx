import React, { Component } from "react";
import Row from "./Row";
import Header from "./Header";
import seeds from "./seeds.json";

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <Header/>
        </thead>
        <tbody>
          {seeds.map((person) => (
            <Row
              key={person.id}
              image={person.image}
              name={person.name}
              email={person.email}
              phone={person.phone}
              dob={person.dob}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
