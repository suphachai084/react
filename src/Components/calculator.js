import React from 'react';

class Calculator extends React.Component {

  constructor(){
    super();
    this.state = {
      num1:"",
      num2 : ""};
  }

  setnum1(e){
    const num1 = e.target.value;
    this.setState({num1:num1});
  }
  setnum2(e){
    const num2 = e.target.value;
    this.setState({num2:num2});
  }


  render() {

    return (
  <div>
    <div>
            <h1>Calculator</h1>
            num1: <input onChange={this.setnum1.bind(this)}/>
            num2: <input onChange={this.setnum2.bind(this)}/>
    </div>
        Result:  {this.state.num1}
                  {this.state.num2}
    </div>
  );
  }
}

export default Calculator;
