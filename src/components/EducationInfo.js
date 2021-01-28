import React from 'react';
import EmploymentForm from './EmploymentForm';

const EducationInfo = (props) => {

  const isClicked = props.isClicked;

  return (
    <div>
      {(isClicked === true)
      ?  <div>
        <EmploymentForm/>
        <ul>
          <li>{props.school}</li>
          <li>{props.degree}</li>
          <li>{props.gradYear}</li>
        </ul>
      </div>
      : null 
      }
    </div>
    );
};

export default EducationInfo;