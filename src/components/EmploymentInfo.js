import React, { Component } from 'react';
import EmploymentForm from './EmploymentForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

class EmploymentInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showEmploymentInfo: true,
    }
    this.onEditItem = this.onEditItem.bind(this) 
  }

  onEditItem = (event) => {
    event.preventDefault();
    this.setState(state => ({ showEmploymentInfo: !state.showEmploymentInfo }));
  }

  render() {

    const editIcon = <FontAwesomeIcon icon = {faEdit} />

  return (
    <div>
      {(this.state.showEmploymentInfo === true)
      ?  <div>
        <ul>
        <li>{this.props.company}</li>
          <li>{this.props.positionTitle}</li>
          <li>{this.props.responsibilities}</li>
          <li>{this.props.dates}</li>
          <span></span>
          <form onClick = {this.onEditItem}>
            <button type = 'submit'>{editIcon}</button>
          </form>
        </ul>
      </div>
      : <div>
        <EmploymentForm/>
      </div>
      }
    </div>
    );
  };
}

export default EmploymentInfo;