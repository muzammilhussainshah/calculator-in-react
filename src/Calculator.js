import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Calculator.css';

class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            initial: "",
            laterValue: "",
            operation: undefined
            

        }

    }

    calculateNumbers(value) {

        if (this.state.operation === undefined) {
            let initialClone = this.state.initial;
            initialClone = initialClone + value.toString();
            this.setState({
                initial: initialClone
            })
        }
        else {
            let laterValueClone = this.state.laterValue;
            laterValueClone = laterValueClone + value.toString()
            this.setState({
                laterValue: laterValueClone
            })
        }



    }
    applyOperation(value) {
        this.setState({
            operation: value
        })
    }





    equalOperation() {
       
        if (this.state.operation === "+" ){
            // console.log(this.state.operation)
            this.setState({
                initial:Number(this.state.initial) + Number(this.state.laterValue),
                operation: undefined,
                laterValue: ""
    
            })
        }
        else if (this.state.operation === "-"){
            this.setState({
                initial: this.state.initial - this.state.laterValue,
                operation: undefined,
                laterValue: ""
            })
        }
        else if (this.state.operation === "/"){
            this.setState({
                initial: this.state.initial / this.state.laterValue,
                operation: undefined,
                laterValue: ""
            })
        }
        else if (this.state.operation === "*"){
            this.setState({
                initial: this.state.initial * this.state.laterValue,
                operation: undefined,
                laterValue: ""
            })
        }
        else { console.log('something went wrong!')}
    }


    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome muzammil to React</h1>
                </header>

                {(this.state.laterValue === "") ?
                    (<input type="text" value={this.state.initial} />) :
                    (<input type="text" value={this.state.laterValue} />)}




                <br /><br /><br />
                <input type="button" name="btn7" value="7" onClick={this.calculateNumbers.bind(this, 7)} />
                <input type="button" name="btn8" value="8" onClick={this.calculateNumbers.bind(this, 8)} />
                <input type="button" name="btn9" value="9" onClick={this.calculateNumbers.bind(this, 9)} />
                <input type="button" name="btn+" value="+" onClick={this.applyOperation.bind(this, "+")} /><br />
                <input type="button" name="btn4" value="4" onClick={this.calculateNumbers.bind(this, 4)} />
                <input type="button" name="btn5" value="5" onClick={this.calculateNumbers.bind(this, 5)} />
                <input type="button" name="btn6" value="6" onClick={this.calculateNumbers.bind(this, 6)} />
                <input type="button" name="btn-" value="-" onClick={this.applyOperation.bind(this, "-")} /><br />
                <input type="button" name="btn1" value="1" onClick={this.calculateNumbers.bind(this, 1)} />
                <input type="button" name="btn2" value="2" onClick={this.calculateNumbers.bind(this, 2)} />
                <input type="button" name="btn3" value="3" onClick={this.calculateNumbers.bind(this, 3)} />
                <input type="button" name="btn*" value="*" onClick={this.applyOperation.bind(this, "*")} /><br />
                <input type="button" name="btn0" value="0" onClick={this.calculateNumbers.bind(this, 0)} />
                <input type="button" name="btn=" value="=" onClick={this.equalOperation.bind(this, "=")} />
                <input type="button" name="btn/" value="/" onClick={this.applyOperation.bind(this, "/")} />
                <input type="button" name="btnC" value="C" onClick={this.calculateNumbers.bind(this, "C")} /><br />


                <br />


            </div>
        );
    }
}

export default Calculator;







