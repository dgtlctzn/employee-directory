import React, { Component } from "react";
import Row from "./Row";
import Header from "./Header";
import seeds from "../../Seeds/seeds.json";
import Search from "../Search/Search";

class Table extends Component {
  state = {
    currentPeople: seeds,
    byFirst: false,
    searchInput: "",
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
        {this.state.currentPeople.length === 0 && <h3>No Results Found</h3>}
      </>
    );
  }
}

export default Table;
