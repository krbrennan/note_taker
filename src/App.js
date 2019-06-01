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

  // componentDidMount(){
  //   // const initialToDos = notesData.map(item => <ToDoItems content={item}/>)
  //   this.setState({
  //     allItems: this.state.todoItems
  //   })
  // }

  handleNewItem(event){
    event.preventDefault()
    event.persist()
    let newItemContent = event.target[0].value

    // this.setState(state => state.todoItems.push(<ToDoItems content={{text: newItemContent, completed: false}} />))
  }

  render(){
    let toDos = this.state.toDoItems.map(item => <ToDoItems content={item} />)
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
