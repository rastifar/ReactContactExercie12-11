import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{this.state.firstName}</th>
              <td>{this.props.lastName}</td>
              <td>{this.props.email}</td>
              <td>{this.props.Phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
