import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      operator: '',
      result: null
    };
  }

  handleNum1Change = (event) => {
    this.setState({ num1: event.target.value });
  }

  handleNum2Change = (event) => {
    this.setState({ num2: event.target.value });
  }

  handleOperatorChange = (event) => {
    this.setState({ operator: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { num1, num2, operator } = this.state;
    let result = null;
    switch(operator) {
      case '+':
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        result = null;
    }
    this.setState({ result });
  }

  render() {
    const { num1, num2, operator, result } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Number 1:
            <input type="number" value={num1} onChange={this.handleNum1Change} />
          </label>
          <br />
          <label>
            Number 2:
            <input type="number" value={num2} onChange={this.handleNum2Change} />
          </label>
          <br />
          <label>
            Operator:
            <select value={operator} onChange={this.handleOperatorChange}>
              <option value="">Select an operator</option>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
          </label>
          <br />
          <button type="submit">Calculate</button>
        </form>
        {result !== null && (
          <div>
            <p>Result: {result}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Calculator;
