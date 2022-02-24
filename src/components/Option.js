import React from 'react'


const Option=(props)=>
    ( 
      <div className="option">
       
       <p className="option__item">{props.count}. {props.optionText}</p>
        
      
      <button className ="option__btn" onClick={(e)=>{
        props.handleRemove(props.optionText)
      }}>Remove</button>
      
      </div>
         
      )
    

  export default Option