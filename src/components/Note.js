import React from 'react'

function Note(props){
  let isComplete = props.content.completed == true ? 1 : 0;
  return(
    <div className='note-item'>
      {isComplete ?
        <input type='checkbox' defaultChecked={true} /> :
        <input type='checkbox' defaultChecked={false} />
      }
      <p>{props.content.text}</p>
    </div>
  )
}

export default Note
