import React, { Component } from 'react';
import GeneralForm from './components/GeneralForm';
import './styles/App.css';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Create Your CV</h1>  
        <div>
          <GeneralForm
          />
        </div>
      </div>
    )
  };
}

export default App;
