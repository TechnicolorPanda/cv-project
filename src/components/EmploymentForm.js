import React, { Component } from 'react';
import EmploymentInfo from './EmploymentInfo';

class EmploymentForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      company: '',
      positionTitle: '',
      responsibilities: '',
      dates: '',
      isClicked: false,
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
    this.setState(state => ({ isClicked: !state.isClicked })); 
  }

  render() {

    return (
      <div>
        { (this.state.isClicked === false)
        ? <form onSubmit = {this.onSubmitItems}>

          <label htmlFor = 'companyInput'>Company </label>
          <input 
            onChange = {this.handleChange}
            name = 'company'
            value = {this.state.company}
            type = 'text' 
            id = 'companyInput' />
          <br></br>

          <label htmlFor = 'positionInput'>Position Title </label>
            <input 
            onChange = {this.handleChange}
            value = {this.state.positionTitle}
            name = 'positionTitle'
            type = 'text' 
            id = 'positionInput' />
          <br></br>

          <label htmlFor = 'responsibilitiesInput'>Job Responsibilities </label>
          <input 
            onChange = {this.handleChange}
            value = {this.state.responsibilities}
            name = 'responsibilities'
            type = 'text' 
            id = 'responsibilitiesInput' />
          <br></br>

          <label htmlFor = 'datesInput'>Dates of Employment </label>
          <input 
            onChange = {this.handleChange}
            value = {this.state.dates}
            name = 'dates'
            type = 'text' 
            id = 'datesInput' />
          <br></br>

          <button type = 'submit'>
            Submit
          </button>
        </form>
        : <EmploymentInfo
          company = {this.state.company} 
          positionTitle = {this.state.positionTitle}
          responsibilities = {this.state.responsibilities}
          dates = {this.state.dates}
        />
    }
      </div> 
    );
  };
}

export default EmploymentForm;