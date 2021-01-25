import React, { Component } from 'react';
import EducationInfo from './EducationInfo';

class GeneralForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      school: '',
      degree: '',
      gradYear: '',
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
      school: this.state.school,
      degree: this.state.degree,
      gradYear: this.state.gradYear,
    })
  }

  render() {

    return (
      <div>
          <form onSubmit = {this.onSubmitItems}>

          <label htmlFor = 'schoolInput'>School </label>
          <input 
            onChange = {this.handleChange}
            name = 'school'
            value = {this.state.school}
            type = 'text' 
            id = 'schoolInput' />
          <br></br>

          <label htmlFor = 'degreeInput'>Degree </label>
            <input 
            onChange = {this.handleChange}
            value = {this.state.degree}
            name = 'degree'
            type = 'text' 
            id = 'degreeInput' />
          <br></br>

          <label htmlFor = 'gradYearInput'>Graduation Year </label>
          <input 
            onChange = {this.handleChange}
            value = {this.state.gradYear}
            name = 'gradYear'
            type = 'number' 
            id = 'gradYearInput' />
          <br></br>

          <button type = 'submit'>
            Submit
          </button>
        </form>
        
        <EducationInfo
          school = {this.state.school} 
          degree = {this.state.degree}
          gradYear = {this.state.gradYear}
        />
      </div>
    );
  };
}

export default GeneralForm;