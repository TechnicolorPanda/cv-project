import React from 'react';

const GeneralInfo = (props) => {
  console.log('overview');

  return (
    <ul>
      <li>{props.fullName}</li>
      <li>{props.email}</li>
      <li>{props.phone}</li>
      <li>{props.address}</li>
    </ul>
    );
};

export default GeneralInfo;