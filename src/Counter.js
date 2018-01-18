import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            userName: "abdullah",


            counter: 0,
            initial: 1,
            // button: <button onClick={this.showMuzammilData.bind(this)}>Show Muzammil Data</button>,
            flag: true,
            tes: 0
        }
        this.formHandler = this.formHandler.bind(this);
        this.increament = this.increament.bind(this);
        this.decreament = this.decreament.bind(this);
        this.manualIncreament = this.manualIncreament.bind(this);
        this.manualDecreament = this.manualDecreament.bind(this);


    }

    //   componentDidMount() {
    //     setInterval(() => {
    //       this.setState({
    //         second: this.state.second + 1,
    //       })

    //       // if (this.state.second === 10) {
    //       //   this.setState({
    //       //     userName: "Muzammil"
    //       //   })
    //       // }
    //     }, 1000);

    //   }



    increament() {

        // console.log("increament", this)
        this.setState({
            counter: this.state.counter + 1
        })


    }
    decreament() {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    formHandler(event) {
        // let cloneCounter = this.state.counter;
        this.setState({
            flag: false,
            initial: event.target.value
        })

    }




    manualIncreament() {
        
        let cloneCounter = Number(this.state.counter);
        let cloneInitial = Number(this.state.initial);
        // console.log(cloneInitial);

        this.setState({

            counter: cloneCounter + cloneInitial,
        })
        // console.log(this.state.counter);

    }
    manualDecreament() {
        this.setState({
            counter: this.state.counter - this.state.initial
        })

    }





    render() {
        // console.log(this.state.tes);
        


        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome {this.state.userName} to React</h1>
                </header>



                <br />
                <br />
                <br />
                {
                    (this.state.flag === true) ?
                        (<div>
                            <button onClick={this.increament}>+</button>
                            <span>
                                {this.state.counter}
                            </span>
                            <button onClick={this.decreament}>-</button>
                        </div>) :
                        (<div>
                            <button onClick={this.manualIncreament}>+</button>
                            <span>
                                {this.state.counter}
                            </span>
                            <button onClick={this.manualDecreament}>-</button>
                        </div>)
                }


                {/* <span>
                    {this.state.counter}
                </span> */}
                {/* {
                    (this.state.flag === true) ?
                        (<button onClick={this.decreament}>-</button>) :
                        (<button onClick={this.manualDecreament}>-</button>)
                } */}
                <br />
                <br />
                <br />


                Manually increament: <input type="text" name="manual" value={this.state.initial}
                    onChange={this.formHandler} /><br />




            </div>
        );
    }
}

export default Counter;