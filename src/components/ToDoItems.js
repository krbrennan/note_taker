import React from 'react'

import '../App.css'

// function ToDoItems(props){
//   let completed = props.content.isComplete === true ? 1 : 0;
//
//   if(props.content.isComplete === true){
//     return(
//       <div className='todo-item'>
//         <input type='checkbox' defaultChecked={true} /> :
//         <p style={{textDecoration:'line-through'}}>{props.content.text}</p>
//       </div>
//     )
//   } else {
//     return (
//       <div className='todo-item'>
//         <input type='checkbox' defaultChecked={false} />
//         <p className='todo-text'>{props.content.text}</p>
//       </div>
//     )
//   }
// }


// 6.9.2019
//  Add delete button to rid app of item
//  insert on flex right-justified

class ToDoItems extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isComplete: false
    }
    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  handleCheckbox(e){
    e.persist()
    // console.log(this.props.content.id)
    // e.preventDefault()
    // console.log(e.target.className)
    // working. successfully calls back to parent
    // console.log(this.props.content.id)

    if(e.target.className === 'delete-item-checkbox'){
      this.props.onClick(this.props.content.id, e.target.className)
    } else {
      this.setState({
        isComplete: !!this.state.isComplete
      })
      this.props.onClick(this.props.content.id, e.target.className)
    }
  }

  render(){
    let isComplete = this.props.content.isComplete === true ? 1 : 0
    return(
      <div className='todo-item'>
        <input type='checkbox' onClick={this.handleCheckbox} defaultChecked={isComplete} />
        <p className='todo-words' style={
          isComplete === 1 ? {textDecoration:'line-through'} : {textDecoration:'none'}
        }>
          {this.props.content.text}
        </p>
        <div className='delete-item-col'>
          <h3>Delete</h3>
          <input className='delete-item-checkbox' type='checkbox' onClick={this.handleCheckbox} />
        </div>
      </div>
    )
  }
}

export default ToDoItems
