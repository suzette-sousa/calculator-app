import React, {Component} from 'react';


class Keypad extends Component {
  
  render() {
    const buttons = [
      {
        btn: '0',
        id: 'zero',
      },
      {
        btn: '1',
        id: 'one',
      },
      {
        btn: '2',
        id: 'two',
      },
      {
        btn: '3',
        id: 'three',
      },
      {
        btn: '4',
        id: 'four',
      },
      {
        btn: '5',
        id: 'five',
      },
      {
        btn: '6',
        id: 'six',
      },
      {
        btn: '7',
        id: 'seven',
      },
      {
        btn: '8',
        id: 'eight',
      },
      {
        btn: '9',
        id: 'nine',
      },
      {
        btn: '.',
        id: 'decimal',
      },
      {
        btn: '+',
        id: 'add',
      },
      {
        btn: '-',
        id: 'subtract',
      },
      {
        btn: '*',
        id: 'multiply',
      },
      {
        btn: '/',
        id: 'divide',
      },
      {
        btn: '=',
        id: 'equals',
      },
      {
        btn: 'ac',
        id: 'clear',
      },
      {
        btn: '←',
        id: 'delete',
      }
    ];
    const calculatorBtns = buttons.map(({ btn, id }) => (
      <button key={id} id={id} value={btn} onClick={this.props.handleButton}>{btn}</button>
    ));
    return (
      <div className="buttons">{calculatorBtns}</div>
    )
  }
}

export default Keypad;
