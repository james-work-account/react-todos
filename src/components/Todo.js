import React from 'react';

class Todo extends React.Component {

  state = {
    checked: false
  }

  componentDidMount() {
    this.setState({checked: this.props.todo.checked})
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if(oldProps.todo.checked !== newProps.todo.checked) {
      this.setState({checked: this.props.todo.checked})
    }
  }

  render() {
    const {todo, handleDelete, handleCheck} = this.props
    return <div className={this.state.checked ? "todo checked" : "todo"}>
      <div onClick={() => handleCheck(todo)}>{todo.text}</div><i className="far fa-trash-alt" onClick={() => handleDelete(todo)}></i>
    </div>
  }
}

export default Todo;