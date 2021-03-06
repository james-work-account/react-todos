import React, { Component } from 'react';
import './App.css';
import Search from './components/Search.js';
import Todos from './components/Todos.js';
import Filters from './components/Filters.js';
import { TodoFilter, InitialState } from './common';
import GitHubIcon from './components/GitHubIcon.js'


class App extends Component {

  state = InitialState;

  // Local Storage
  loadStateFromLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);

        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }
  saveStateToLocalStorage() {
    for (let key in this.state) {
        localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  // Lifecycle methods
  componentDidMount() {
    // Load state from localStorage
    this.loadStateFromLocalStorage();

    // Resizing page
    this.setState({width: window.innerWidth});
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    // Remove listeners
    window.removeEventListener("resize", this.updateDimensions);
  }

  componentDidUpdate() {
    // Save state to localStorage
    this.saveStateToLocalStorage();
  }

  updateDimensions = () => {
    this.setState({ 
      width: window.innerWidth
    });
  }

  // Add a new Todo
  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.currentTodoText !== "") {
      const newTodo = {
        id: Date.now(),
        text: this.state.currentTodoText,
        checked: false
      };
      const todos = [...this.state.todos, newTodo];
      this.setState({todos});
      this.setState({currentTodoText: ""});
      document.querySelector(".search input").value = "";
    }
  }

  // Update current Todo text
  handleChange = (event) => this.setState({currentTodoText: event.target.value})

  resetData = (event) => {
    event.preventDefault();
    this.setState({todos: InitialState.todos});
    this.setState({currentTodoText: InitialState.currentTodoText});
    this.setState({currentFilter: InitialState.currentFilter});
    document.querySelector(".search input").value = "";
  }

  // Delete a Todo
  handleDelete = (todo) => {
    const todos = this.state.todos.filter((td) => td.id !== todo.id)
    this.setState({todos})
  }

  // Check a Todo
  handleCheck = (todo) => {
    const todos = this.state.todos.map((td) => td.id === todo.id ? {...td, checked: !td.checked} : td)
    this.setState({todos})
  }

  // Change Todo filter
  handleFilter = (filter) => {
    switch (filter) {
      case TodoFilter.filterCompleted: {
        this.setState({currentFilter: TodoFilter.filterCompleted})
        break;
      }
      case TodoFilter.filterUncompleted: {
        this.setState({currentFilter: TodoFilter.filterUncompleted})
        break;
      }
      case TodoFilter.all: {
        this.setState({currentFilter: TodoFilter.all})
        break;
      }
      default: {
        this.setState({currentFilter: TodoFilter.all})
        break;
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="body">
          <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} resetData={this.resetData}/>
          <Filters handleFilter={this.handleFilter} currentFilter={this.state.currentFilter}/>
          <Todos todos={this.state.todos.filter(
            (todo) => {
              switch (this.state.currentFilter) {
                case TodoFilter.filterCompleted: return todo.checked;
                case TodoFilter.filterUncompleted: return !todo.checked;
                case TodoFilter.all: return true;
                default: return true;
              }
            }
          )} handleDelete={this.handleDelete} handleCheck={this.handleCheck}/>
        </div>
        <GitHubIcon />
      </div>
    );
  }
}

export default App;
