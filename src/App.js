// 5.1.2019
// NEED TO:
// Get rid of App's control over the todoItems
// I cant modify the complete status of the items from the child component
// the TodoItems component needs to have control over the state of the items

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
        {id:1, text: "Add a new item!", isComplete:true},
      ]
    }
    this.handleNewItem = this.handleNewItem.bind(this)
    this.handleChange = this.handleChange.bind(this)
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

  handleChange(e){
    console.log('changed!')
  }

  render(){
    let toDos = this.state.toDoItems.map(item => <ToDoItems content={item} onChange={this.handleChange}/>)
    return (
      <div className="App">
        <Header />
        <div className='todo-container'>
          <AddItem onSubmit={this.handleNewItem} />
          {toDos}
        </div>
      </div>
    )
  }
}

export default App
