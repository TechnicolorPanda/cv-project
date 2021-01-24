import React from 'react';

const Overview = (props) => {
  const { fullName } = props.fullName;
  const { email } = props.email;

  return (
    <ul>
        {fullName}
        {email}
    </ul>
    );
};

export default Overview;