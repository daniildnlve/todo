import PropTypes from 'prop-types'

import Task from '../Task/Task'
import './TaskList.css'

function TaskList({ tasks, onDeleted, onToggleDone }) {
  const elements = tasks.map((item) => {
    const { id, done, time } = item

    return (
      <Task
        key={id}
        label={item.label}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
        done={done}
        time={time}
      />
    )
  })

  return <ul className="todo-list">{elements}</ul>
}

TaskList.defaultProps = {
  tasks: [],
  onDeleted: () => {},
  onToggleDone: () => {},
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
}

export default TaskList
