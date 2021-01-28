import React from 'react';
// import ReactDOM from 'react-dom';
import EducationForm from './EducationForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const GeneralInfo = (props) => {
  const editIcon = <FontAwesomeIcon icon = {faEdit} />
  const isClicked = props.isClicked;

  return (
    <div>
      {(isClicked === true)
      ? <div>
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
        : null
        }
      </div>
    );
}

export default GeneralInfo;