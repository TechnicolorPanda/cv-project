import React from 'react';

const EducationInfo = (props) => {

  return (
    <ul>
      <li>{props.school}</li>
      <li>{props.degree}</li>
      <li>{props.gradYear}</li>
    </ul>
    );
};

export default EducationInfo;