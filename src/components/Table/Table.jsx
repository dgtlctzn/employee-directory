import React, { Component } from "react";
import Row from "./Row";
import Header from "./Header";
import seeds from "./seeds.json";

class Table extends Component {

  state = {
    currentPeople: seeds
  }

  handleNameSort = () => {
    const sorted = this.state.currentPeople.sort((a, b) => {
      a = a.name.toUpperCase();
      b = b.name.toUpperCase();
      if (a > b) {
          return 1;
      } else if (a < b) {
          return -1;
      } else {
        return 0;
      }
    });
    this.setState({
      currentPeople: sorted
    });
  }


  render() {
    return (
      <table>
        <thead>
          <Header handleNameSort={this.handleNameSort}/>
        </thead>
        <tbody>
          {this.state.currentPeople.map((person) => (
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
