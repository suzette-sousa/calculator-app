import React, {Component} from 'react';
import './App.css';
import Result from './components/Result';
import Keypad from './components/Keypad';

class App extends Component {
  constructor() {
    super();

    this.state = {
      calc: "",
      result: "0"
    }
    this.handleButtons = this.handleButtons.bind(this);
  }

  handleButtons = (e) => {
    let calcTarget = e.target.value;

    if(e.target.value === "=") {
      this.calcResult();
    } else if(calcTarget === "ac") {
      this.reset()
    }  else if(calcTarget === "del") {
      this.delAction()
    } else {
      this.checkOpConditions(calcTarget);
    }
  }

  checkOpConditions = (calcTarget) => {
    let calc = this.state.calc;
    let calcStr = calc.toString();
    let newCalc = calc + calcTarget;

    if(newCalc.substr(-2).match(/[%,/,+,*][%,/,+,*]/g) || newCalc.match(/^[0]{1,}/g)) {
      calc = calc.slice(0, -1);
    }
    if(newCalc.substr(-2).match(/[-][%,/,+,*]/g)) {
      calc = calc.slice(0, -2);
    }
    if(calcStr.match(/[.]{2,}/g) || calcStr.match(/[.]{1,}[-,/,+,*,%]/g) || calcStr.match(/[0-9]+[.]{1,}[0-9]+[.]{1,}/g)) {
      calc = calc.slice(0, -1);
    }

    this.setState({
      calc: calc + calcTarget,
      result: calc + calcTarget
    })
  }

  delAction = () => {
    let calc = this.state.calc;
    let newCalc = calc.toString();
    newCalc = calc.slice(0, -1);
    this.setState({
      calc: newCalc,
      result: newCalc
    })
  }

  calcResult = () => {
    let checkResult = ''
    try {
      checkResult = eval(this.state.calc)
      this.setState({
        //eslint-disable-next-line
        result: checkResult,
        calc: checkResult
      })
    }
    catch (e) {
      this.setState({
        result: 'Erreur'
      })
    }
  }

  reset = () => {
    this.setState({
      calc: "",
      result: "0"
    })
  };

  render() {
    return (
      <div>
        <div className="calculator">
          <Result result={this.state.result} calc={this.state.calc} />
          <Keypad handleButton={this.handleButtons} />
        </div>
      </div>
    )
  }
}

export default App;
