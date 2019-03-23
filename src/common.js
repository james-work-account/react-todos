export const TodoFilter = Object.freeze({
  filterCompleted: Symbol("filterCompleted"),
  filterUncompleted: Symbol("filterUncompleted"),
  all: Symbol("clearFilter")
})

export const InitialState = {
  currentTodoText: "",
  todos: [{
    id: Date.now(),
    text: "Click Me!",
    checked: false
  }],
  currentFilter: null,
  width: null
}