 const approot = document.getElementById('text')

 class IndecisionApp extends React.Component{
   constructor(props){
     super(props)
     this.handleRemoveAll=this.handleRemoveAll.bind(this)
     this.handlePick=this.handlePick.bind(this)
     this.handleAddOption=this.handleAddOption.bind(this)
     this.handleRemove=this.handleRemove.bind(this)
     this.state={
        items: []
     }
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

   handlePick(){
     const num=Math.floor(Math.random()*this.state.items.length)
     const option = this.state.items[num]

     return alert(option)
   }
   handleRemoveAll(){
    
     this.setState(()=>({items:[]}))
   }

   handleRemove(optionText){
      this.setState((prevState)=>({
        items:prevState.items.filter((item)=>item!==optionText)
      }))
   }

   handleAddOption(value){
   if(this.state.items.indexOf(value)>-1){
     return ("this item already exists")
   }else if(!value){
     return ("Please enter a valid value")
   }
  
     this.setState((prevState)=>({items : prevState.items.concat([value])}))
   }

    render(){
      
      return (
        <div>
        <Header/>
        <Action handlePick={this.handlePick} 
        hasoptions={this.state.items.length>0}/>
        <Options options={this.state.items} handleRemoveAll={this.handleRemoveAll} handleRemove={this.handleRemove}/>
        <AddOptions handleAddOption={this.handleAddOption}/>
        </div>
        )
    }
}
 const Header=()=>{
  return (
    <div>test
    <h1>Indecison</h1>
    <h4>Put your life in the hands of a computer</h4>
    </div>
  )
 }


const Action=(props)=>{
  return( <div><button disabled={!props.hasoptions} onClick={props.handlePick}>What do I do?</button>
    <br/>
    <br/>
    </div>
   )
}
// class Action extends React.Component{
 
//   render(){
//     return( <div><button disabled={!this.props.hasoptions} onClick={this.props.handlePick}>What do I do?</button>
//        <br/>
//        <br/>
//        </div>
//       )
    
//   }
// }

const Options =(props) =>{
  return(
    <div>
  <button disabled={props.options.length===0} onClick={props.handleRemoveAll}>Remove All</button>
  <br/>
  <br/>
  {props.options.length===0 && <p>Please add an item to get started!</p>}
{props.options.map((option)=>{
      return( <Option key={option} 
        optionText={option} 
        handleRemove={props.handleRemove}/>)
    }) }

    </div>
  )
}

const Option=(props)=>{
  return(<div>
   
     {props.optionText} 
    
    <button onClick={(e)=>{
      props.handleRemove(props.optionText)
    }}>Remove</button>
    </div>)
}

class AddOptions extends React.Component{
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
   <div>
   {this.state.error&&<p>{this.state.error}</p>}
   <form onSubmit={this.handleAddOption}>
   <input type='text' name='options' autoComplete='off' autoFocus/>
   <button>Add Option</button>
   </form>
   </div>
  )
}}


ReactDOM.render(<IndecisionApp/>,approot)

