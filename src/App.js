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
      todoItems: notesData.map(item => <ToDoItems content={item}/>),
      // allItems: []
    }
    this.handleNewItem = this.handleNewItem.bind(this)
    // this.onChange = this.onChange.bind(this)
  }

  // componentDidMount(){
  //   // const initialToDos = notesData.map(item => <ToDoItems content={item}/>)
  //   this.setState({
  //     allItems: this.state.todoItems
  //   })
  // }

  handleNewItem(event){
    event.preventDefault()
    event.persist()
    let fs = require('fs')
    fs.writeFile("anus", newItemContent, function(err) {
      if(err){
        console.log(err)
      }
    })
    // console.log(event.target[0].value)
    let newItemContent = event.target[0].value
    notesData.concat({text: newItemContent, completed: false})
    this.setState(state => state.todoItems.push(<ToDoItems content={{text: newItemContent, completed: false}} />))
    // this.setState(state => state.todoItems.concat(<ToDoItems content={{text: newItemContent, completed: false}} />))
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div className='todo-container'>
          <AddItem onSubmit={this.handleNewItem} />
            <h6>{this.state.todoItems}</h6>
        </div>
      </div>
    )
  }
}

export default App
