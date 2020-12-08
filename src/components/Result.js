import React, {Component} from 'react';

class Result extends Component {
    render() {
        return (
            <div className="result">
                {this.props.calc != 0 && <em className="calc">{this.props.calc}</em>}
                <span id="display">{this.props.result}</span>
            </div>
        )
    }
}

export default Result;