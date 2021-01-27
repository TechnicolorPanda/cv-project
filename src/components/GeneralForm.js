import { render } from '@testing-library/react';
import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';

class GeneralForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
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
    event.preventDefault();
    console.log('submit');

    this.setState({
      fullName: this.state.fullName,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
    })

    console.log(this.state.fullName);

    return (
      <div>
        <GeneralInfo
          fullName = {this.state.fullName} 
          email = {this.state.email}
          phone = {this.state.phone}
          address = {this.state.address}
        />
      </div>
    );
  };

  render() {

    return (
      <div>
          <form 
            onSubmit = {this.onSubmitItems}
            >

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

          <button 
            type = 'submit' 
            value = 'Submit'
          >Submit</button>


        </form>
{/*         TODO: go to general info only after submit button */}
        
        {/* <GeneralInfo
          fullName = {this.state.fullName} 
          email = {this.state.email}
          phone = {this.state.phone}
          address = {this.state.address}
        /> */}
      </div>
    );
  };
}

export default GeneralForm;