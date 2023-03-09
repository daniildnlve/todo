import Task from '../Task/Task';
import './TaskList.css'

const TaskList = ({tasks, onDeleted, onToggleDone}) => {

  const elements = tasks.map((item) => {
    const {id, done} = item;

    return (
      <Task
        key={id} 
        label={item.label}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
        done={done}
      />
    );
  });

  return (
    <ul className="todo-list">
      {elements}
    </ul>
  );
};

export default TaskList;