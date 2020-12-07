import React, {Component} from 'react';

class Result extends Component {
    render() {
        return (
            <div className="result">
                {/* <em>{this.props.calc}</em> */}
                <span id="display">{this.props.result}</span>
            </div>
        )
    }
}

export default Result;