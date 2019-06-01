import React from 'react'

function ToDoItems(props){
  let isComplete = props.content.isComplete === true ? 1 : 0;

  return(
    <div className='todo-item'>
      {isComplete ?
        <input type='checkbox' defaultChecked={true} /> :
        <input type='checkbox' defaultChecked={false} />
      }
      <p className='todo-text'>{props.content.text}</p>
    </div>
  )
}

export default ToDoItems
