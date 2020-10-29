import React, { Component } from "react";
import Row from "./Row";
import Header from "./Header";
import seeds from "./seeds.json";
import Search from "../Search/Search"

class Table extends Component {
  state = {
    currentPeople: seeds,
    byFirst: false,
  };

  handleNameSort = () => {
    // alphabetizes names
    const sorted = this.state.currentPeople.sort((a, b) => {
      if (!this.state.byFirst) {
        // sorts by first name if not sorted or sorted by last name
        a = a.name.toUpperCase();
        b = b.name.toUpperCase();
      } else if (this.state.byFirst) {
        // sorts by last name if sorted by first name
        a = a.name.split(" ")[1].toUpperCase();
        b = b.name.split(" ")[1].toUpperCase();
      }
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({
      currentPeople: sorted,
      // keeps track of how list is sorted
      byFirst: !this.state.byFirst,
    });
  };

  handleSearch = (event) => {
    event.preventDefault();

    const found = [];
    for (const item of this.state.currentPeople) {
      if (item.name.includes("Alex")) {
        found.push(item);
      }
      // switch(item) {
      //   case item.name.includes("Alex"):
      //     found.push(item);
      //     break;
      //   // case item.email.includes("alex"):
      //   //   found.push(item);
      //   default:
      //     return this.state.currentPeople;
      // }
    }
    console.log(found)
    this.setState({
      currentPeople: found
    })
  }

  render() {
    return (
      <>
      <Search handleSearch={this.handleSearch}/>
      <table>
        <thead>
          <Header handleNameSort={this.handleNameSort} />
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
      </>
    );
  }
}

export default Table;
