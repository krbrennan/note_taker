import React from 'react'
import ToDoItems from './components/ToDoItems'
import AddItem from './components/AddItem'
import './App.css'

import Header from './components/Header'

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
  }

  handleNewItem(event){
    console.log(event)

    let nextId = this.state.toDoItems.slice(-1).id + 1
    const newState = this.state.toDoItems.concat({id: nextId, text: event, isComplete: false})

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
