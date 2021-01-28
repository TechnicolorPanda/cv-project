import React from 'react';
// import ReactDOM from 'react-dom';
import EducationForm from './EducationForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Component } from 'react';

// const GeneralInfo = (props) => {

class GeneralInfo extends Component {

  render() {

    const editIcon = <FontAwesomeIcon icon = {faEdit} />
    const isClicked = this.props.isClicked;

    return (
      <div>
      { (isClicked === true)
        ? <div>
          <EducationForm/>
          <ul>
            <li>{this.props.fullName}</li>
            <li>{this.props.email}</li>
            <li>{this.props.phone}</li>
            <li>{this.props.address}</li>
            <span></span>
            <li>{editIcon}</li>
          </ul>
        </div>
          : null
          }
      </div>
    );
  }
}

export default GeneralInfo;