export const TodoFilter = Object.freeze({
  filterCompleted: "filterCompleted",
  filterUncompleted: "filterUncompleted",
  all: "clearFilter"
})

export const InitialState = {
  currentTodoText: "",
  todos: [{
    id: Date.now(),
    text: "Click Me!",
    checked: false
  }],
  currentFilter: TodoFilter.all,
  width: null
}