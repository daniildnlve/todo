import { Component } from 'react';
import './Task.css'

export default class Task extends Component {

  render() {
    const {label, onDeleted, onToggleDone, done} = this.props;
    
    let classNames = '';
    if (done) {
      classNames += 'completed';
    }

    return (
      <li className={classNames}>
        <div className='view'>
          <input className='toggle' type='checkbox' onChange={onToggleDone}></input>
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

