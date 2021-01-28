import React from 'react';

const EmploymentInfo = (props) => {
  const isClicked = props.isClicked;

  return (
    <div>
      {(isClicked === true)
      ? <div>
        <ul>
          <li>{props.company}</li>
          <li>{props.positionTitle}</li>
          <li>{props.responsibilities}</li>
          <li>{props.dates}</li>
        </ul>
      </div>
      : null}
    </div>
    );
};

export default EmploymentInfo;