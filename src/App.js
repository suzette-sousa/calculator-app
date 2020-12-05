import React, {Component} from 'react';
import './App.css';
import Result from './components/Result';
import Keypad from './components/Keypad';

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  render() {
    return (
      <div>
        <div className="calculator">
          <Result result={this.state.result} />
          <Keypad onClick={this.onClick} />
        </div>
      </div>
    )
  }
}

export default App;
