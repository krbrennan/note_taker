// 5.1.2019
// NEED TO:
// Get rid of App's control over the todoItems
// I cant modify the complete status of the items from the child component
// the TodoItems component needs to have control over the state of the items

// 6.3.2019
//  Instead of handling control over to todoItems,
//      make todoItems a class and handle its 'completed' state there,
//      just like the AddItem component

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
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    // this is getting called from ToDoItems child component
    // When the item is clicked (making it complete or not)
    // I want the items' complteted state to be changed here.
    let id = e
      this.state.toDoItems.map(item => {
        if(item.id === e){
          item.isComplete = !item.isComplete
        }
      })

console.log(this.state.toDoItems)
  }

  handleNewItem(event){

    let nextId = this.state.toDoItems.length+1
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
    let toDos = this.state.toDoItems.map(item => <ToDoItems content={item} onClick={this.handleClick} onChange={this.handleChange}/>)
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
