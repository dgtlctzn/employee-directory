import React, { Component } from "react";
import Row from "./Row";

class Table extends Component {
  render() {
    return (
      <table>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </table>
    );
  }
}

export default Table;
