import { Component } from "react";

import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";

import './App.css'

export default class App extends Component {
  
  state = {
    taskData: [
      { label: 'Drink Coffee', id: 1},
      { label: 'Make Awsome App', id: 2},
      { label: 'Have a lunch', id: 3}
    ]
  }

  deleteItem = (id) => {
    this.setState(({taskData}) => {
      const idx = taskData.findIndex((el) => el.id === id);
      
      const newArray = [
        ...taskData.slice(0, idx),
        ...taskData.slice(idx + 1)
      ];

      return {
        taskData: newArray
      }
    })
  };

  render() {
    return (
      <section className="todoapp">
        <NewTaskForm />
        <section className="main">
          <TaskList 
            tasks={this.state.taskData}
            onDeleted={this.deleteItem}/>
          <Footer />
        </section>
      </section>
    );
  }
}

