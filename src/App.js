import React from 'react';
import './App.css';

import Header from './components/Header'
import Note from './components/Note'

import notesData from './components/notesData'
// import Note from './components/Note'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      todoItems: notesData.map(item => <Note content={item} /> )
    }
  }
  render(){
    return (
      <div className="App">
      <Header />
      <div className='todo-container'>
        {this.state.todoItems}
      </div>
      </div>
    );
  }
}

export default App;
