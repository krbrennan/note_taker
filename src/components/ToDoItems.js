import React from 'react'

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

class ToDoItems extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isComplete: false
    }
    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  handleCheckbox(e){
    // working. successfully calls back to parent
    // console.log(this.props.content.id)
    this.setState({
      isComplete: !!this.state.isComplete
    })
    this.props.onClick(this.props.content.id)
  }

  render(){
    let isComplete = this.props.content.isComplete === true ? 1 : 0
    return(
      <div className='todo-item'>
        <input type='checkbox' onClick={this.handleCheckbox} defaultChecked={isComplete} />
        <p style={
          isComplete === 1 ? {textDecoration:'line-through'} : {textDecoration:'none'}
        }>
          {this.props.content.text}
        </p>
      </div>
    )
  }



}

export default ToDoItems
