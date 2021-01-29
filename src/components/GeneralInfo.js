import React from 'react';
import EducationForm from './EducationForm';
import GeneralForm from './GeneralForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Component } from 'react';

class GeneralInfo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showGeneralInfo: true,
    }
    this.onEditItem = this.onEditItem.bind(this) 
  }

  onEditItem = (event) => {
    event.preventDefault();
    this.setState(state => ({ showGeneralInfo: !state.showGeneralInfo }));
  }

  render() {

    const editIcon = <FontAwesomeIcon icon = {faEdit} />

    return (
      <div>
      { (this.state.showGeneralInfo === true)
        ? <div>
          <EducationForm/>
          <ul>
            <li>{this.props.fullName}</li>
            <li>{this.props.email}</li>
            <li>{this.props.phone}</li>
            <li>{this.props.address}</li>
            <span></span>
            <form onClick = {this.onEditItem}>
              <button type = 'submit'>{editIcon}</button>
            </form>
          </ul>
        </div>
        : <div>
          <GeneralForm/>
        </div>
      }
      </div>
    );
  }
}

export default GeneralInfo;