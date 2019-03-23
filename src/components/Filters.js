import React from 'react';
import { TodoFilter } from '../common'

export default class Filters extends React.Component {
  state = {
    currentFilter: TodoFilter.all
  }

  componentDidMount() {
    this.setState({currentFilter: this.props.currentFilter})
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if(oldProps.currentFilter !== newProps.currentFilter) {
      this.setState({currentFilter: this.props.currentFilter})
    }
  }

  render() {
    const {handleFilter} = this.props;
    return <div className="filters">
      <button className={`btn ${this.state.currentFilter === TodoFilter.all ? 'active-filter' : ''}`} onClick={() => handleFilter(TodoFilter.all)}>Show All</button>
      <button className={`btn ${this.state.currentFilter === TodoFilter.filterCompleted ? 'active-filter' : ''}`} onClick={() => handleFilter(TodoFilter.filterCompleted)}>Show Completed</button>
      <button className={`btn ${this.state.currentFilter === TodoFilter.filterUncompleted ? 'active-filter' : ''}`} onClick={() => handleFilter(TodoFilter.filterUncompleted)}>Show Uncompleted</button>
    </div>
  }
}
