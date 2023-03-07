import Task from '../Task/Task';
import './TaskList.css'

const TaskList = ({tasks, onDeleted}) => {

  const elements = tasks.map((item) => {
    const {id} = item;

    return (
      <Task
      key={id} 
      label={item.label}
      onDeleted={() => onDeleted(id)}/>
    );
  });

  return (
    <ul className="todo-list">
      {elements}
    </ul>
  );
};

export default TaskList;