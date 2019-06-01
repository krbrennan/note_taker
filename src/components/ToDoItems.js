import React from 'react'

function ToDoItems(props){
  let completed = props.content.isComplete === true ? 1 : 0;
  console.log(props)
  if(props.content.isComplete === true){
    return(
      <div className='todo-item'>
        <input type='checkbox' defaultChecked={true} /> :
        <p style={{textDecoration:'line-through'}}>{props.content.text}</p>
      </div>
    )
  } else {
    return (
      <div className='todo-item'>
        <input type='checkbox' defaultChecked={false} />
        <p className='todo-text'>{props.content.text}</p>
      </div>
    )
  }
  // return(
  //   <div className='todo-item'>
  //     {completed ?
  //       <input type='checkbox' defaultChecked={true} /> :
  //       <input type='checkbox' defaultChecked={false} />
  //     }
  //     {completed === 1 ?
  //       <p style={{textDecoration:'line-through'}}>{props.content.text}</p> :
  //       <p className='todo-text'>{props.content.text}</p>
  //     }
  //   </div>
  // )
}

export default ToDoItems
