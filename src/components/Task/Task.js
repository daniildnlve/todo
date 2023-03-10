import { Component } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import './Task.css'

export default class Task extends Component {
  static defaultProps = {
    done: false,
    label: '',
    onDeleted: () => {},
    onToggleDone: () => {},
  }

  static propTypes = {
    done: PropTypes.bool,
    label: PropTypes.string,
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func,
    time: PropTypes.string,
  }

  state = {
    timer: formatDistanceToNow(this.props.time, { includeSeconds: true }),
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      timer: formatDistanceToNow(this.props.time, { includeSeconds: true }),
    })
  }

  render() {
    const { label, onDeleted, onToggleDone, done } = this.props

    let classNames = ''
    if (done) {
      classNames += 'completed'
    }

    return (
      <li className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={onToggleDone} checked={!!done} />
          <label>
            <span className="description">{label}</span>
            <span className="created">
              created
              {this.state.timer}
            </span>
          </label>
          <button className="icon icon-edit" />
          <button className="icon icon-destroy" onClick={onDeleted} />
        </div>
      </li>
    )
  }
}
