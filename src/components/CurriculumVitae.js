import React, { Component } from 'react';

class CurriculumVitae extends Component {

    constructor(props) {
        super(props)
    
        this.setState = {
          fullName: this.props.fullName,
          address: this.props.address,
          email: this.props.email,
          phone: this.props.phone,
          school: this.props.school,
          degree: this.props.degree,
          gradYear: this.props.gradYear,
        }
      }

    render() {
     return (
        <div>
          <div>
            <ul>
              <h2>{this.props.fullName}</h2>
              <li>{this.props.address}</li>
              <li>{this.props.email}</li>
              <li>{this.props.phone}</li>
              <li>{this.props.school}</li>
              <li>{this.props.degree}</li>
              <li>{this.props.gradYear}</li>
              <span></span>
            </ul>
          </div>
        </div>
      );
    };
}

export default CurriculumVitae;