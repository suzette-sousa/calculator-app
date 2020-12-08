import React, {Component} from 'react';
import './App.css';
import Result from './components/Result';
import Keypad from './components/Keypad';

class App extends Component {
  constructor() {
    super();

    this.state = {
      calc: "0",
      result: "0"
    }
    this.handleButtons = this.handleButtons.bind(this);
  }

  handleButtons = (e) => {
    let calcTarget = e.target.value;

    if(e.target.value === "=") {
      this.calcResult();
    } else if(calcTarget === "AC") {
      this.reset()
    }  else if(calcTarget === "←") {
      this.delAction()
    } else {
      this.checkOpConditions(calcTarget);
    }
  }

  checkOpConditions = (calcTarget) => {
    let calc = this.state.calc;
    let calcStr = calc.toString();
    let newCalc = calc + calcTarget;

    if(newCalc.substr(-2).match(/[-][-]/g)) {
      calc = newCalc.replace("--", "+");
      this.setState({
        calc: calc
      })
    } else {
      if(newCalc.substr(-2).match(/[%,/,+,*]{2,}/g) || newCalc.match(/^[0]{1,}/g)) {
        calc = calc.slice(0, -1);
      }
      if(newCalc.substr(-2).match(/[-][%,/,+,*]/g)) {
        calc = calc.slice(0, -2);
      }
      if(calcStr.match(/[.]{2,}/g) || calcStr.match(/[.]{1,}[-,/,+,*,%]/g) || calcStr.match(/[0-9]+[.]{1,}[0-9]+[.]{1,}/g)) {
        calc = calc.slice(0, -1);
      }
      this.setState({
        calc: calc + calcTarget
      })
    }
  }

  delAction = () => {
    let calc = this.state.calc;
    let newCalc = calc.toString();
    newCalc = calc.slice(0, -1);
    this.setState({
      calc: newCalc
    })
  }

  
  calcResult = () => {
    if(!this.state.calc.match(/[-,%,/,+,*,.]$/g)) {
      let checkResult = ''
      function parse(str) {
        return Function(`'use strict'; return (${str})`)();
      }
      checkResult = parse(this.state.calc);
      checkResult = Math.round(checkResult * 100) / 100;
      this.setState({
        result: checkResult
      })
    } else {
      this.setState({
        result: "Erreur"
      })
    }
  }

  reset = () => {
    this.setState({
      calc: "0",
      result: "0"
    })
  };

  render() {
    return (
      <div className="calculator">
        <div className="calculator-ctn">
          <Result result={this.state.result} calc={this.state.calc} />
          <Keypad handleButton={this.handleButtons} />
        </div>
      </div>
    )
  }
}

export default App;
