import React, { Component } from 'react';
import GeneralForm from './components/GeneralForm';
import './styles/App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showGeneralInfo: false,
    }
  }

  render() {
    return (
      <div>
        <h1>Create Your CV</h1>  
        <div>
          <GeneralForm
            showGeneralInfo = {this.state.showGeneralInfo}
          />
        </div>
      </div>
    )
  };
}

export default App;
