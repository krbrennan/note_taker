import React from 'react'


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
    // e.persist()
    e.preventDefault()
    this.props.onSubmit(e.target[0].defaultValue)
    // console.log(this.props.onSubmit())
    // console.log(e.target[0].defaultValue)
    this.clearInputField()
  }


  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit} >
          <label>Add Item:
            <input
              type='text'
              placeholder='New Item, Wow, incredible'
              onChange={this.handleChange}
              value={this.state.toDoItemValue}
            />
          </label>
          </form>
      </div>
    )
  }
}

export default AddItem
