import Task from '../Task/Task';
import './TaskList.css'

const TaskList = (props) => {
  return (
    <ul className="todo-list">
      <Task />
    </ul>
  );
};

export default TaskList;