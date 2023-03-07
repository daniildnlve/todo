import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";

import './App.css'

const App = () => {
  
  const taskData = [
    {},
    {},
    {}
  ];

  return (
    <section className="todoapp">
      <NewTaskForm />
      <section className="main">
        <TaskList />
        <Footer />
      </section>
    </section>
  );
}

export default App;