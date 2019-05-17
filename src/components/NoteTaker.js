import React from 'react'
import notesData from './notesData'
import Note from './Note'
import AddNote from './AddNote'


function NoteTaker(){
  const notes = notesData.map(item => <Note content={item} /> );
  return(
    <div className='note-taker-container'>
      <AddNote />
      {notes}
    </div>
  )
}

export default NoteTaker
