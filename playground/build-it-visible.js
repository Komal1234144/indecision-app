const approot = document.getElementById('text')

class Visibility extends React.Component{
    constructor(props){
        super(props)
        this.handleToggle=this.handleToggle.bind(this)
        this.state = {
            visibility : false
        }
    }
    handleToggle(){
      this.setState((prevState)=>{
          return { visibility : !prevState.visibility}
      })
    }
    render(){
        const visibility = false
        return (
            <div>
              <h1>Visibility Toggle</h1>
              <button onClick={this.handleToggle}>{this.state.visibility===false?'show details':'hide details'}</button>
              {this.state.visibility===true && <p>Here are some options</p>}
            </div>
        )
    }
}
ReactDOM.render(<Visibility/>,approot)
// let details = "Show Details"
// const onClick = () =>{
//     if(details==='Show Details'){
//    document.getElementById('value').innerText= 'Here are some details'
//    details = 'Hide Details'
//     render()}else{
//         document.getElementById('value').innerText = ''
//         details = "Show Details"
//         render()
//     }

// }

// const render = () => {
//     const template = (
//         <div>
//            <h1>Visibility Toggle</h1>
//            <button onClick={onClick}>{details}</button>
//            <div id= 'value'></div>
//         </div>
//     )

//     ReactDOM.render(template,approot)
// }

// render()