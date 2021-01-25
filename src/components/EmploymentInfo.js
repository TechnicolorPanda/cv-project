import React from 'react';

const EmploymentInfo = (props) => {
  console.log('overview');

  return (
    <ul>
      <li>{props.company}</li>
      <li>{props.positionTitle}</li>
      <li>{props.responsibilities}</li>
      <li>{props.dates}</li>
    </ul>
    );
};

export default EmploymentInfo;