import React from "react"
import AddOptions from './AddOptions'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from "./OptionModal"

export default class IndecisionApp extends React.Component{
   
      state={
         items: [],
         selectedOption : undefined
      }
    
      handlePick=()=>{
        const num=Math.floor(Math.random()*this.state.items.length)
        const option = this.state.items[num]
   
        this.setState(()=>{
          return {
            selectedOption : option
          }
        })
      }

      handleRemoveAll=()=>{
       
        this.setState(()=>({items:[]}))
      }
      
      handleOptionModal=()=>{
        this.setState(()=>({selectedOption : undefined}))
      }

      handleRemove=(optionText)=>{
         this.setState((prevState)=>({
           items:prevState.items.filter((item)=>item!==optionText)
         }))
      }
   
      handleAddOption=(value)=>{
          
      if(this.state.items.indexOf(value)>-1){
        return ("this item already exists")
      }else if(!value){
        return ("Please enter a valid value")
      }
     
        this.setState((prevState)=>({items : prevState.items.concat([value])}))
      }

     componentDidMount(){
       console.log('didMount')
       let json= localStorage.getItem('items')
        const items = JSON.parse(json)
        if(items){
          this.setState(()=>({items}))
        }
     }
 
     componentDidUpdate(prevProps,prevState){
       console.log('update')
       // if(prevState.items.length != this.state.items.length){
          const json = JSON.stringify(this.state.items)
          localStorage.setItem('items', json)
       // }  
        
     }
     
     componentWillUnmount(){
        console.log("Uunmounted")
     }
 
    
 
     render(){
       
       return (
      <div >
         <Header/>
         <div className="center-the-container"> 
            <Action handlePick={this.handlePick} 
            hasoptions={this.state.items.length>0}/>
            <Options options={this.state.items} handleRemoveAll={this.handleRemoveAll} handleRemove={this.handleRemove}/>
            <AddOptions handleAddOption={this.handleAddOption}/>
         </div>
         <OptionModal selectedOption={this.state.selectedOption} handleOptionModal={this.handleOptionModal}/>
      </div>
         )
     }
 }