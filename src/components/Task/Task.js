import { Component } from 'react';
import './Task.css'

export default class Task extends Component {

  state = {
    done: false
  };

  completeTask = () => {
    this.setState((state) => {
      return {
        done: !state.done
      };
    });
  };

  render() {
    const {label, onDeleted} = this.props;
    const {done} = this.state;

    let classNames = '';
    if (done) {
      classNames += 'completed';
    }

    return (
      <li className={classNames}>
        <div className='view'>
          <input className='toggle' type='checkbox' onChange={this.completeTask}></input>
          <label>
            <span className='description'>{label}</span>
            <span className='created'></span>
          </label>
          <button className='icon icon-edit'></button>
          <button 
            className='icon icon-destroy'
            onClick={onDeleted}>
          </button>
        </div>
      </li>
    );
  }
}

