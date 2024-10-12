import React, { Component } from 'react';
import ContactForm from './ContactForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contactList :[]
    }
  }
  submitHandler = (contact) => {
    console.log(contact);
    this.setState({
      contactList:[...this.state.contactList,contact]
    })
  }
  render() {
    return (
      <div>
        <ContactForm submithandler={this.submitHandler}/>        
      </div>
    );
  }
}

export default App;