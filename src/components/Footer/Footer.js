import TasksFilter from "../TasksFilter/TasksFilter";
import './Footer.css'

const Footer = ({todoCount, onDeletedAllDone, filter, onFilterChange}) => {
  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>
      <TasksFilter filter={filter} onFilterChange={onFilterChange}/>
      <button className="clear-completed" onClick={onDeletedAllDone}>Clear completed</button>
    </footer>
  );
};

export default Footer;