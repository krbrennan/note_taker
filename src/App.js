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
      // todoItems: notesData.map(item => <ToDoItems content={item}/>),
      toDoItems: [
        {id:1, text: "anus!", isComplete:false},
        {id:2, text: "OK", isComplete: true}
      ]
    }
    this.handleNewItem = this.handleNewItem.bind(this)
    // this.onChange = this.onChange.bind(this)
  }

  handleNewItem(event){
    event.preventDefault()
    event.persist()

    let nextId = this.state.toDoItems.slice(-1).id + 1
    let newItemText = event.target[0].value
    const newState = this.state.toDoItems.concat({id: nextId, text: newItemText, isComplete: false})

    this.setState(state => {
        state.toDoItems = newState
      return {
        state
      }
    })
  }

  render(){
    let toDos = this.state.toDoItems.map(item => <ToDoItems content={item} />)
    return (
      <div className="App">
        <Header />
        <div className='todo-container'>
          <AddItem onSubmit={this.handleNewItem} />
          {toDos}
          {console.log(this.state.toDoItems)}
        </div>
      </div>
    )
  }
}

export default App
