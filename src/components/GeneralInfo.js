import React from 'react';
import EducationForm from './EducationForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const GeneralInfo = (props) => {
  console.log('overview');
  const editIcon = <FontAwesomeIcon icon = {faEdit} />

  // TODO: create edit button under general information

  return (
    <div>
      <ul>
        <li>{props.fullName}</li>
        <li>{props.email}</li>
        <li>{props.phone}</li>
        <li>{props.address}</li>
        <span></span>
        <li>{editIcon}</li>
      </ul>
      <EducationForm/>
    </div>
    );
};

export default GeneralInfo;