import React, { Component } from 'react';
import Overview from './components/Overview';
import './styles/App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      generalInfo: '',
      fullName: '',
      // email: '',
      // phone: '',
      // address: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmitItems = (event) => {
    console.log('submit');
    const { fullName, email } = this.state
    event.preventDefault();

    console.log(fullName);
    console.log(email);

    // this.setState({
    // generalInfo: this.state,
    // });
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
        <Overview fullName = { fullName }/>
      </div>
    );
  };
}

export default App;
