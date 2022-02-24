import React from "react"

const Action=(props)=>
    ( <div>
      <button className="action-btn"
      disabled={!props.hasoptions} 
      onClick={props.handlePick}>What should I do? 
      </button>
      <br/>
      <br/>
      </div>
     )
  
  // class Action extends React.Component{
   
  //   render(){
  //     return( <div><button disabled={!this.props.hasoptions} onClick={this.props.handlePick}>What do I do?</button>
  //        <br/>
  //        <br/>
  //        </div>
  //       )
      
  //   }
  // }
export default Action  