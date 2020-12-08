import React, {Component} from 'react';


class Keypad extends Component {
  
  render() {
    const buttons = [
      {
        btn: '=',
        id: 'equals',
        type: 'total'
      },
      {
        btn: '.',
        id: 'decimal',
        type: 'number'
      },
      {
        btn: '0',
        id: 'zero',
        type: 'number'
      },
      {
        btn: '1',
        id: 'one',
        type: 'number'
      },
      {
        btn: '2',
        id: 'two',
        type: 'number'
      },
      {
        btn: '3',
        id: 'three',
        type: 'number'
      },
      {
        btn: '4',
        id: 'four',
        type: 'number'
      },
      {
        btn: '5',
        id: 'five',
        type: 'number'
      },
      {
        btn: '6',
        id: 'six',
        type: 'number'
      },
      {
        btn: '7',
        id: 'seven',
        type: 'number'
      },
      {
        btn: '8',
        id: 'eight',
        type: 'number'
      },
      {
        btn: '9',
        id: 'nine',
        type: 'number'
      },
      {
        btn: '+',
        id: 'add',
        type: 'op'
      },
      {
        btn: '-',
        id: 'subtract',
        type: 'op'
      },
      {
        btn: '*',
        id: 'multiply',
        type: 'op'
      },
      {
        btn: '/',
        id: 'divide',
        type: 'op'
      },
      {
        btn: 'AC',
        id: 'clear',
        type: 'other'
      },
      {
        btn: '←',
        id: 'delete',
        type: 'other'
      }
    ];

    function groupArrayOfObjects(list, key) {
      return list.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };
    
    let calculatorBtnsCatg = groupArrayOfObjects(buttons,"type");

    const calculatorBtns = Object.keys(calculatorBtnsCatg).map((item, i) => (
      <div key={i} className={item}>
        {calculatorBtnsCatg[item].map(({ btn, id }) => (
          <button key={id} className={`btn btn-${item}`} value={btn} onClick={this.props.handleButton}>{btn}</button>
        ))}
      </div>
    ));
    ;

    return (
      <div className="buttons">{calculatorBtns}</div>
    )
  }
}

export default Keypad;
