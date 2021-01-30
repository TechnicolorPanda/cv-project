import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';

class GeneralForm extends Component {
  constructor(props) {
    super(props)

    let showGeneralInfo = this.props.showGeneralInfo;
    this.setState(state => ({ showGeneralInfo: !state.showGeneralInfo }));
    console.log(showGeneralInfo);

    if(showGeneralInfo === false) {
    
      this.state = {
        fullName: '',
        email: '',
        phone: '',
        address: '',
        school: '',
        degree: '',
        gradYear: '',
        company: '',
        positionTitle: '',
        responsibilities: '',
        dates: '', 
        showGeneralInfo: false,
      }
    } else {
      this.state = {
        showGeneralInfo: true,
      }
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
    this.setState({
      showGeneralInfo: true,
    })
  };


  onEditItem = (event) => {
    event.preventDefault();
    this.setState({
      showGeneralInfo: false,
    })
  };

  render() {
    return (
      <div>

         <form 
         onSubmit = {this.onSubmitItems} 
         style = {{display: this.state.showGeneralInfo ? 'none': 'block'}}>

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

          <button 
            type = 'submit' 
            value = 'Submit'
          >Submit</button>

        </form>

        <form 
            onSubmit = {this.onEditItems} 
            style = {{display: this.state.showGeneralInfo ? 'block': 'none'}}
          >
            <GeneralInfo
              fullName = {this.state.fullName} 
              email = {this.state.email}
              phone = {this.state.phone}
              address = {this.state.address}
              school = {this.state.school} 
              degree = {this.state.degree}
              gradYear = {this.state.gradYear}
              company = {this.state.company} 
              positionTitle = {this.state.positionTitle}
              responsibilities = {this.state.responsibilities}
              dates = {this.state.dates}
              showGeneralInfo = {this.state.showGeneralInfo}
            />
              <button 
              type = 'submit'
              value = 'Submit'
              >Edit</button>
        </form>
      </div>
    );
  };
}

export default GeneralForm;