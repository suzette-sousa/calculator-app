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
    let calc = this.state.calc;
    let calcTarget = e.target.value;
    if(e.target.value === "=") {
      this.calcResult();
    } else if(calcTarget === "ac") {
      this.reset()
    } else if((['+', '*', '/', '%'].indexOf(calc[calc.length - 1]) !== -1) && (['+', '*', '/', '%'].indexOf(calcTarget) !== -1)) {
      let newCalc = calc.slice(0, -1);
      this.setState({
        calc: newCalc + calcTarget,
        result: newCalc + calcTarget,
      })

    } else if(['.'].indexOf(calc[calc.length - 1]) !== -1 && ['.'].indexOf(calcTarget) !== -1) {
      let newCalc = calc.slice(0, -1);
      this.setState({
        calc: newCalc + calcTarget,
        result: newCalc + calcTarget,
      })
    } else if((['-'].indexOf(calc[calc.length - 1]) !== -1) && (['+', '*', '/', '%'].indexOf(calcTarget) !== -1)) {
      let newCalc = this.state.calc.slice(0, -2);
      this.setState({
        calc: newCalc +calcTarget,
        result: newCalc + calcTarget,
      })
    } else if((['0'].indexOf(calc[calc.length - 1]) !== -1) && calc.length < 2 && (['0'].indexOf(calcTarget) !== -1)) {
      let newCalc = this.state.calc.slice(0, -1);
      this.setState({
        calc: newCalc + calcTarget,
        result: newCalc + calcTarget,
      })
    } else {
      this.setState({
        calc: calc + calcTarget,
        result: calc + calcTarget
      })
    }

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
        result: 'error'
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
