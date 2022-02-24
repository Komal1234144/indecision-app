import React from 'react'


export default class AddOptions extends React.Component{
    constructor(props){
      super(props)
      this.handleAddOption=this.handleAddOption.bind(this)
      this.state={
        error:undefined
      }
    }
   
     handleAddOption(e){
     e.preventDefault()
     let value = e.target.elements.options.value.trim()
     e.target.elements.options.value = ''
     let error = this.props.handleAddOption(value)
        
         
            this.setState(()=>({error}))
       }
   
   render()
   {
     return(
      <div >
      {this.state.error&&<p className="error">{this.state.error}</p>}
      <form className="addOption" onSubmit={this.handleAddOption}>
      <input className="addOption__input"type='text' name='options'  autoFocus/>
       
      <button className="addOption__btn">Add Option</button>
      </form>
      </div>
     )
   }}