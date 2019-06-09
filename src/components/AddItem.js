import React from 'react'

// For a few hours I was confounded with a simple issue.
// onSubmit of the form I called a function in the parent component (through props)
// and wondered why this component wouldn't reset the form value (back to '').
// To remedy the issue I instead called a function within this component to handle the submit.
// Within handleSubmit(e) I was able to clear the form value
// and also pass the content back up to the parent so the parent
// could update state with a new to-do item


class AddItem extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      toDoItemValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.clearInputField = this.clearInputField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      toDoItemValue: event.target.value
    })
  }

  clearInputField(){
    this.setState({toDoItemValue: ''})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onSubmit(e.target[0].defaultValue)
    this.clearInputField()
  }

  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit} >
          <label><h3>Add Item:</h3>
            <input
              type='text'
              placeholder='New Item, Wow, Incredible'
              onChange={this.handleChange}
              value={this.state.toDoItemValue}
              className='add-item-text'
            />
          </label>
          </form>
      </div>
    )
  }
}

export default AddItem
