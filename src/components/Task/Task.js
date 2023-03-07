import './Task.css'

const Task = () => {
  return (
    <li>
      <div className='view'>
        <input className='toggle' type='checkbox'></input>
        <label>
          <span className='description'></span>
          <span className='created'></span>
        </label>
        <button className='icon icon-edit'></button>
        <button className='icon icon-destroy'></button>
      </div>
    </li>
  );
};

export default Task;