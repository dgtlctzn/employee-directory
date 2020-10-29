import React, { Component } from "react";
import Row from "./Row";
import Header from "./Header";
import seeds from "../../seeds/seeds.json";
import Search from "../Search/Search";
import "./Table.css"

class Table extends Component {
  state = {
    currentPeople: seeds,
    aToZ: false,
    aToZIcon: "fas fa-sort-alpha-up",
    searchInput: "",
  };

  handleNameSort = () => {
    let icon = "fas fa-sort-alpha-up";
    // alphabetizes names
    const sorted = this.state.currentPeople.sort((first, next) => {
      let [a, b] = [first.name.toUpperCase(), next.name.toUpperCase()];
      if (this.state.aToZ) {
        // sorts from z to a if sorted from a to z
        [b, a] = [a, b];
        icon = "fas fa-sort-alpha-down-alt"
      }
      // sorts from a to z if not sorted or sorted from z to a
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
      aToZ: !this.state.aToZ,
      aToZIcon: icon
    });
  };

  handleSearch = (event) => {
    event.preventDefault();

    const found = [];
    // searches for match in seeds for name, phone, email, or dob category
    for (const item of seeds) {
      if (item.name.includes(this.state.searchInput)) {
        found.push(item);
      } else if (item.phone.includes(this.state.searchInput)) {
        found.push(item);
      } else if (item.email.includes(this.state.searchInput)) {
        found.push(item);
      } else if (item.dob.includes(this.state.searchInput)) {
        found.push(item);
      }
    }
    this.setState({
      currentPeople: found,
      // searchInput: ""
    });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <Search
          handleInputChange={this.handleInputChange}
          handleSearch={this.handleSearch}
          name="searchInput"
          value={this.state.search}
        />
        <div className="container">
          <table>
            <thead>
              <Header handleNameSort={this.handleNameSort} icon={this.state.aToZIcon}/>
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
          {
            // An empty search displays an h3 tag on the page
            this.state.currentPeople.length === 0 && <h3>No Results Found</h3>
          }
        </div>
      </>
    );
  }
}

export default Table;
