import React, { Component } from "react";
import Input from "./Input";
import Table from "./Table";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "firstName",
      lastName: "lastName",
      email: "email",
        phone: "456",
      
    };
  }
  formSubmit = (e) => {
    e.preventDefault();
    this.props.submithandler(this.state);
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { firstName, lastName, email, phone } = this.state;
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <Input
            name="firstName"
            changeHandler={this.changeHandler}
            labelName="First Name"
            type="text"
            placeholder={firstName}
          />
          <Input
            name="lastName"
            changeHandler={this.changeHandler}
            labelName="Last Name"
            type="text"
            placeholder={lastName}
          />
          <Input
            name="email"
            changeHandler={this.changeHandler}
            labelName="Email"
            type="email"
            placeholder={email}
          />
          <Input
            name="phone"
            changeHandler={this.changeHandler}
            labelName="Phone"
            type="text"
            placeholder={phone}
          />
          <button>Add to list</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
