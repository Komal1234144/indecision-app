const approot = document.getElementById('text')

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.handleAdd=this.handleAdd.bind(this)
        this.handleMinu=this.handleMinu.bind(this)
        this.handleReset=this.handleReset.bind(this)
        this.state={
            count:0
        }
    }

    componentDidMount(){
       let json = localStorage.getItem('count')
       const count = JSON.parse(json)
       if(count!==0){
           this.setState(()=>({count}))
       }
    }
  
    componentDidUpdate(prevState , prevProps){
       const json= JSON.stringify( this.state.count)
       localStorage.setItem('count', json) 
    
    }

    handleAdd(){
        console.log(this)
       this.setState((prevState)=>{
           return {count : prevState.count + 1}
       })
    }
    handleMinu(){
      this.setState((prevState)=>{
          return {count: prevState.count - 1}
      })
    }

    handleReset(){
        this.setState((prevState)=>{
            return{count:0}
        })    }    
    render(){
        return (
            <div>
             <h1>Counter:{this.state.count}</h1>
             <button onClick={this.handleAdd}>+1</button>
             <button onClick={this.handleMinu}>-1</button>
             <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

 
ReactDOM.render(<Counter/>, approot)


