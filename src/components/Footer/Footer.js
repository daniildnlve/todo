import PropTypes from 'prop-types'

import TasksFilter from '../TasksFilter/TasksFilter'
import './Footer.css'

function Footer({ todoCount, onDeletedAllDone, filter, onFilterChange }) {
  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>
      <TasksFilter filter={filter} onFilterChange={onFilterChange} />
      <button className="clear-completed" onClick={onDeletedAllDone}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.defaultProps = {
  todoCount: 0,
  onDeletedAllDone: () => {},
  filter: 'all',
  onFilterChange: () => {},
}

Footer.propTypes = {
  todoCount: PropTypes.number,
  onDeletedAllDone: PropTypes.func,
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
}

export default Footer
