import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      generalInfo: [],
      fullName: '',
      email: '',
      phone: '',
      address: '',
    }
    this.handleChange = this.handleChange.bind(this) 
    this.onSubmitItems = this.onSubmitItems.bind(this) 
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    });
  }

  onSubmitItems = (event) => {
    console.log('submit');
    event.preventDefault();

    this.setState({
      fullName: this.state.fullName,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
    })
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

          <label htmlFor = 'phoneInput'>Phone Number </label>
          <input 
            onChange = {this.handleChange}
            value = {this.state.phone}
            name = 'phone'
            type = 'number' 
            id = 'phoneInput' />
          <br></br>

          <label htmlFor = 'addressInput'>Address </label>
          <input 
            onChange = {this.handleChange}
            value = {this.state.address}
            name = 'address'
            type = 'text' 
            id = 'addressInput' />
          <br></br>

          <button type = 'submit'>
            Submit
          </button>
        </form>
        <GeneralInfo
          fullName = {this.state.fullName} 
          email = {this.state.email}
          phone = {this.state.phone}
          address = {this.state.address}
        />
      </div>
    );
  };
}

export default App;
