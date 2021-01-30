import React from 'react';
import GeneralForm from './GeneralForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import '../styles/GeneralInfo.css';

const GeneralInfo = (props) => {

  const { 
    fullName, 
    address, 
    email, 
    phone, 
    school, 
    degree, 
    gradYear, 
    company, 
    positionTitle, 
    responsibilities, 
    dates, 
  } = props;
  const editIcon = <FontAwesomeIcon icon = {faEdit} />

  return (
    <div>
      <div>
        <ul>
          <h2>{fullName}</h2>
          <li>{address}</li>
          <li>{email}</li>
          <li>{phone}</li>
          <li>{school}</li>
          <li>{degree}</li>
          <li>{gradYear}</li>
          <li>{company}</li>
          <li>{positionTitle}</li>
          <li>{responsibilities}</li>
          <li>{dates}</li>
          <span></span>
        </ul>
      </div>
    </div>
  );
}

export default GeneralInfo;