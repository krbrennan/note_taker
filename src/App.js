import React from 'react'
import ToDoItems from './components/ToDoItems'
import AddItem from './components/AddItem'
import './App.css'

import Header from './components/Header'

import notesData from './components/notesData'
// import Note from './components/Note'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      todoItems: notesData.map(item => <ToDoItems content={item} /> )
    }
  }
  render(){
    return (
      <div className="App">
        <Header />
        <div className='todo-container'>
          <AddItem />
          {this.state.todoItems}
        </div>
      </div>
    );
  }
}

export default App
