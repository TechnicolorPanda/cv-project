import React, { Component } from 'react';
import Overview from './components/Overview';
import './styles/App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      fullName: '',
      email: '',
      // phone: '',
      // address: '',
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name);
    console.log(value);

    this.setState({
      [name]: value
    });
  };

  onSubmitItems = (event) => {
    event.preventDefault();
    this.setState({
      fullName: this.state.fullName,
      email: this.state.email,
    });
  }

  render() {

    return (
      <div>
          <h1>Create Your CV</h1>
          <form onSubmit = {this.onSubmitItems}>

          <label htmlFor = 'nameInput'>Name </label>
          <input 
            onChange = {this.handleChange}
            name = 'fullName'
            value = {this.state.fullName}
            type = 'text' 
            id = 'nameInput' />
          <br></br>

          <label htmlFor = 'emailInput'>Email </label>
            <input 
            onChange = {this.handleChange}
            value = {this.state.email}
            name = 'email'
            type = 'text' 
            id = 'emailInput' />
          <br></br>

          {/* <label htmlFor = 'phoneInput'>Phone Number </label>
          <input 
            onChange = {this.handleChange}
            value = {generalInfo.phone}
            type = 'number' 
            id = 'phoneInput' />
          <br></br> */}

          {/* <label htmlFor = 'addressInput'>Address </label>
          <input 
            onChange = {this.handleChange}
            value = {generalInfo.address}
            type = 'text' 
            id = 'addressInput' />
          <br></br> */}

          <button type = 'submit'>
            Submit
          </button>
        </form>
        <Overview fullName = 'fullName' email = 'email'/>
      </div>
    );
  };
}

export default App;
