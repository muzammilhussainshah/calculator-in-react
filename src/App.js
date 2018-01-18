import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      userName: "Muzammil",
      rollNum: 5215,
      insitute: "saylani",
      subject: ['html', 'java script', 'css'],
      score: {
        html: 72,
        css: 60,
        javascript: 93,
      },
      second: 0,
      currentUser: "muzammil",
      emptyTodo: "",
      todos: [],
      flag: false
    }
    this.showAbdullahData = this.showAbdullahData.bind(this);
    this.showMuzammilData = this.showMuzammilData.bind(this);
    this.formHandler = this.formHandler.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.clearTodo = this.clearTodo.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
    
    // this.indDelte = this.indDelte.bind(this ,id);
    // this.editTodo = this.editTodo.bind(this, id);


  }
  myInterval;
  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState({
        second: this.state.second + 1,
      })

    }, 1000)

  }
  componentWillUnmount(){
    clearInterval(this.myInterval)
  }

  showAbdullahData() {
    this.setState({
      userName: "Abdullah",
      rollNum: 5216,
      score: {
        html: 74,
        css: 56,
        javascript: 60,
      },
      currentUser: "Abdullah"

    })
  }

  showMuzammilData() {
    this.setState({
      userName: "Muzammil",
      rollNum: 5215,
      score: {
        html: 72,
        css: 60,
        javascript: 93,
      },
      currentUser: "muzammil"

    })
  }
  formHandler(event) {
    this.setState({
      emptyTodo: event.target.value
    })
  }
  addTodo(eve) {
    if (this.state.emptyTodo === "") {
      alert("Todo is empty")
    }
    else {
      let todosClone = this.state.todos;
      todosClone.push(this.state.emptyTodo);
      this.setState({
        todos: todosClone,
        emptyTodo: ""
      })
    }
  };
  clearTodo(event) {
    if (this.state.todos.length === 0) {
      alert("its already clear");
    }
    else {
      this.setState({
        todos: [],
        emptyTodo: ""

      })
    }

  }
  indDelte(id) {
    let cloneArray = this.state.todos;
    cloneArray.splice(id, 1);
    this.setState({
      todos: cloneArray
    })

  }
  editTodo(id) {
    let cloneEditItem = this.state.todos[id];
    this.setState({
      flag: true,
      emptyTodo: cloneEditItem,
      editIndex: id
    })
  }
  saveTodo() {
    let updatedVal = this.state.emptyTodo;
    let cloneTodo = this.state.todos;
    let ind = this.state.editIndex;
    cloneTodo.splice(ind, 1, updatedVal);

    this.setState({
      todos: cloneTodo,
      flag: false,
      emptyTodo: ""
    })

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>my name is {this.state.userName}</p>
        <p>my roll is {this.state.rollNum}</p>
        <p>my score is <br /> {this.state.subject[0]}:{this.state.score.html}<br />
          {this.state.subject[1]}:{this.state.score.javascript}<br />
          {this.state.subject[2]}:{this.state.score.css}</p>
        <p>seconds:{this.state.second}</p>
        {
          (this.state.currentUser === "muzammil") ?
            (<button onClick={this.showAbdullahData}>show Abdullah data</button>) :
            (<button onClick={this.showMuzammilData}>show Muzammil data</button>)
        }
        <br />
        <br />
        Type todo:  <input type="text" name="user name" value={this.state.emptyTodo} onChange={this.formHandler} />
        <br />
        {
          (this.state.flag === true) ?
            (<button onClick={this.saveTodo}>Save todo</button>) :
            (<button onClick={this.addTodo}>Add todo</button>)
        }
        <button onClick={this.clearTodo}>clear Todo</button>
        <ol>
          {
            this.state.todos.map((todos, id) => {
              return (
                <li key={id}>
                  {todos}
                  <button onClick={this.indDelte.bind(this, id)}>Del</ button>
                  <button onClick={this.editTodo.bind(this, id)}>Edit</ button>
                </li>
              )

            })
          }
        </ol>






      </div>
    );
  }
}

export default Todo;
