import React, { Component } from 'react';
import EmploymentForm from './EmploymentForm';
import EducationForm from './EducationForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import CurriculumVitae from './CurriculumVitae';

class EducationInfo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showEducationInfo: true,
    }
    this.onEditItem = this.onEditItem.bind(this) 
  }

  onEditItem = (event) => {
    event.preventDefault();
    this.setState(state => ({ showEducationInfo: !state.showEducationInfo }));
  }

  render() {

    const editIcon = <FontAwesomeIcon icon = {faEdit} />

  return (
    <div>
      {(this.state.showEducationInfo === true)
      ?  <div>
        <EmploymentForm/>
        <CurriculumVitae
          school = {this.props.school}
          degree = {this.props.degree}
          gradYear = {this.props.gradYear}
          />
        {/* <ul>
          <li>{this.props.school}</li>
          <li>{this.props.degree}</li>
          <li>{this.props.gradYear}</li> */}
          <span></span>
          <form onClick = {this.onEditItem}>
            <button type = 'submit'>{editIcon}</button>
          </form>
        {/* </ul> */}
      </div>
      : <div>
        <EducationForm/>
      </div>
      }
    </div>
    );
  };
}

export default EducationInfo;