import React, { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import '../styles/GeneralForm.css';

const GeneralForm = () => {

  // create states using hooks

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');  
  const [school, setSchool] = useState('');  
  const [degree, setDegree] = useState('');  
  const [gradYear, setGradYear] = useState('');  
  const [company, setCompany] = useState('');
  const [positionTitle, setPositionTitle] = useState('');  
  const [responsibilities, setResponsiblities] = useState('');
  const [dates, setDates] = useState('');  
  const [showGeneralInfo, setShowGeneralInfo] = useState(false);

  // displays information entered

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowGeneralInfo(true);
  }

  // resets state when form is edited

  const onEditItem = (event) => {
    event.preventDefault();
    setFullName(fullName);
    setEmail(email);
    setPhone(phone);
    setAddress(address);
    setSchool(school);
    setDegree(degree);
    setGradYear(gradYear);
    setCompany(company);
    setPositionTitle(positionTitle);
    setResponsiblities(responsibilities);
    setDates(dates);
    setShowGeneralInfo(false);
  };

  return (
    <div>

      {/* creates form for CV information */}

      <form 
        onSubmit = {handleSubmit} 
        style = {{display: showGeneralInfo ? 'none': 'block'}}>

        <label htmlFor = 'nameInput'>Name </label>
        <input 
          onChange = {e => setFullName(e.target.value)}
          value = {fullName}
          name = 'fullName'
          type = 'text' 
          id = 'nameInput' />
        <br></br>

        <label htmlFor = 'emailInput'>Email </label>
          <input 
          onChange = {e => setEmail(e.target.value)}
          value = {email}
          name = 'email'
          type = 'text' 
          id = 'emailInput' />
        <br></br>

        <label htmlFor = 'phoneInput'>Phone Number </label>
        <input 
          onChange = {e => setPhone(e.target.value)}
          value = {phone}
          name = 'phone'
          type = 'number' 
          id = 'phoneInput' />
        <br></br>

        <label htmlFor = 'addressInput'>Address </label>
        <input 
          onChange = {e => setAddress(e.target.value)}
          value = {address}
          name = 'address'
          type = 'text' 
          id = 'addressInput' />
        <br></br>

        <label htmlFor = 'schoolInput'>School </label>
        <input 
          onChange = {e => setSchool(e.target.value)}
          name = 'school'
          value = {school}
          type = 'text' 
          id = 'schoolInput' />
        <br></br>

        <label htmlFor = 'degreeInput'>Degree </label>
          <input 
          onChange = {e => setDegree(e.target.value)}
          value = {degree}
          name = 'degree'
          type = 'text' 
          id = 'degreeInput' />
        <br></br>

        <label htmlFor = 'gradYearInput'>Graduation Year </label>
        <input 
          onChange = {e => setGradYear(e.target.value)}
          value = {gradYear}
          name = 'gradYear'
          type = 'number' 
          id = 'gradYearInput' />
        <br></br>

        <label htmlFor = 'companyInput'>Company </label>
        <input 
          onChange = {e => setCompany(e.target.value)}
          name = 'company'
          value = {company}
          type = 'text' 
          id = 'companyInput' />
        <br></br>

        <label htmlFor = 'positionInput'>Position Title </label>
          <input 
          onChange = {e => setPositionTitle(e.target.value)}
          value = {positionTitle}
          name = 'positionTitle'
          type = 'text' 
          id = 'positionInput' />
        <br></br>

        <label htmlFor = 'responsibilitiesInput'>Job Responsibilities </label>
        <input 
          onChange = {e => setResponsiblities(e.target.value)}
          value = {responsibilities}
          name = 'responsibilities'
          type = 'text' 
          id = 'responsibilitiesInput' />
        <br></br>

        <label htmlFor = 'datesInput'>Dates of Employment </label>
        <input 
          onChange = {e => setDates(e.target.value)}
          value = {dates}
          name = 'dates'
          type = 'text' 
          id = 'datesInput' />
        <br></br>

        <button>Submit</button>

      </form>

      {/* passes props to GeneralInfo component to display */}

      <form 
        onSubmit = {onEditItem} 
        style = {{display: showGeneralInfo ? 'block': 'none'}} >
        <GeneralInfo
          fullName = {fullName} 
          email = {email}
          phone = {phone}
          address = {address}
          school = {school} 
          degree = {degree}
          gradYear = {gradYear}
          company = {company} 
          positionTitle = {positionTitle}
          responsibilities = {responsibilities}
          dates = {dates}
          showGeneralInfo = {showGeneralInfo}
          editEvent = {onEditItem.bind(this)}
        />
      </form>
    </div>
  );
}

export default GeneralForm;