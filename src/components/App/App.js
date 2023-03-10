import { Component } from 'react'

import NewTaskForm from '../NewTaskForm/NewTaskForm'
import TaskList from '../TaskList/TaskList'
import Footer from '../Footer/Footer'

import './App.css'

export default class App extends Component {
  maxId = 100

  constructor(props) {
    super(props)
    this.state = {
      taskData: [],
      filter: 'all',
    }
  }

  createItem(label) {
    return {
      label,
      done: false,
      id: (this.maxId += 1),
      time: new Date(),
    }
  }

  deleteItem = (id) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el) => el.id === id)

      const newArray = [...taskData.slice(0, idx), ...taskData.slice(idx + 1)]

      return {
        taskData: newArray,
      }
    })
  }

  deleteAllDone = () => {
    this.setState(({ taskData }) => {
      const newArray = [...taskData.filter((el) => !el.done)]

      return {
        taskData: newArray,
      }
    })
  }

  addItem = (text) => {
    this.setState(({ taskData }) => {
      const newArr = [...taskData, this.createItem(text)]

      return {
        taskData: newArr,
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el) => el.id === id)
      const oldItem = taskData[idx]
      const newItem = { ...oldItem, done: !oldItem.done }
      const newArray = [...taskData.slice(0, idx), newItem, ...taskData.slice(idx + 1)]

      return {
        taskData: newArray,
      }
    })
  }

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  filterTasks = (items, filter) => {
    if (filter === 'all') {
      return items
    }
    if (filter === 'active') {
      return items.filter((item) => !item.done)
    }
    if (filter === 'completed') {
      return items.filter((item) => item.done)
    }
  }

  render() {
    const { taskData, filter } = this.state
    const todoCount = taskData.filter((el) => !el.done).length
    const visibleItems = this.filterTasks(taskData, filter)

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onItemAdded={this.addItem} />
        </header>
        <section className="main">
          <TaskList tasks={visibleItems} onDeleted={this.deleteItem} onToggleDone={this.onToggleDone} />
          <Footer
            todoCount={todoCount}
            onDeletedAllDone={this.deleteAllDone}
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </section>
      </section>
    )
  }
}
