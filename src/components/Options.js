import React from 'react'
import Option from './Option'
const Options =(props) =>
    (
      <div>
      <div className="options">
      <p className="options__p">Your Options </p>
      <button className="options__btn"disabled={props.options.length===0} onClick={props.handleRemoveAll}>Remove All</button>
      </div>
     
   
    {props.options.length===0 && <div className="notice">Please add an item to get started!</div>}
    
  {props.options.map((option, index)=>{
        return( <Option key={option} 
          optionText={option}
          count={index + 1} 
          handleRemove={props.handleRemove}/>)
      }) }
  
      </div>
    )
  

  export default Options