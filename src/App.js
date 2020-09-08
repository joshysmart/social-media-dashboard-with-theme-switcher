import React from 'react';
import AppContainer from './components/AppContainer.js';
import './App.css';
import './cursor.svg'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const {name} = e.target;
    this.setState({
      [name]: !this.state.checked
    })
  }

  render () {
    return (
      <div className="wrapper">
        <AppContainer 
        handleChange={this.handleChange}
        state={this.state}
        />
      </div>
    )
  }
}

export default App;
