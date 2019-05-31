import React from 'react'


class AddItem extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      toDoItemValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.clearInputField = this.clearInputField.bind(this)
  }

  handleChange(event){
    this.setState({
      toDoItemValue: event.target.value
    })
  }

  clearInputField(e){
    e.persist()
    e.preventDefault()
    this.setState({
      toDoItemValue: ''
    })
  }

  render(){
    return(
      <div>
        <form id='addItemForm' onSubmit={this.props.onSubmit && this.clearInputField}>
          <label>Add Item:
            <input
              type='text'
              placeholder='New Item, Wow, incredible'
              onChange={this.handleChange}
              value={this.state.toDoItemValue}
              onSubmit={this.clearInputField}
            />
          </label>
        </form>
      </div>
    )
  }
}

export default AddItem
