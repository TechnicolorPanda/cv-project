import React, { Component } from 'react';
import GeneralForm from './GeneralForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import '../styles/GeneralInfo.css';

class GeneralInfo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showGeneralInfo: true,
      fullName: this.props.fullName,
      email: this.props.email,
      phone: this.props.phone,
      address: this.props.address,
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
          <ul>
            <h2>{this.props.fullName}</h2>
            <li>{this.props.address}</li>
            <li>{this.props.email}</li>
            <li>{this.props.phone}</li>
            <li>{this.props.school}</li>
            <li>{this.props.degree}</li>
            <li>{this.props.gradYear}</li>
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
          <GeneralForm/>
        </div>
      }
      </div>
    );
  }
}

export default GeneralInfo;