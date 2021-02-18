import React from 'react';
import '../styles/GeneralInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const GeneralInfo = (props) => {

  const editIcon = <FontAwesomeIcon icon = {faEdit} />

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
    editEvent,
  } = props;

  
  return (

    <div className = 'displayCV'>
        <ul>
          <h2 className = 'general'>{fullName}</h2>
          <li className = 'general'>{address}</li>
          <li className = 'general'>{email}</li>
          <li className = 'general' id = 'phone'>{phone}</li>
          <h3 className = 'education'>{school}</h3>
          <li className = 'education'>{degree} {'•'} {gradYear}</li>
          <h3 className = 'employment'>{company}</h3>
          <li className = 'employment'>{positionTitle}</li>
          <li className = 'employment'>{responsibilities}</li>
          <li className = 'employment'>{dates}</li>
          <button onClick = {editEvent}>{editIcon}</button>
          <span></span>
        </ul>
      </div>
  );
}

export default GeneralInfo;