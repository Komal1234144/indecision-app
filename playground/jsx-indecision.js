const approot = document.getElementById('text')


// var templateTwo = (
//     <div>
//        <h1> Name : Komal Tolambia</h1>
//        <p> Age : 20 yrs.</p>
//        <p> Location : Rajasthan</p>   
//     </div>
// );

let user = {
    title : "Indecison app",
    subtitle : 'Welcome',
    options : []
}

const onFormSubmit=(e)=>{
  e.preventDefault()
  let option = e.target.elements.option.value
  if(option){
   user.options.push(option)
   e.target.elements.option.value= ''
   
   render()}
}

const removeAll = () =>{
    user.options = []
    render()
}
 
const randomNumber= () =>{
  const number = Math.floor(Math.random() * user.options.length)
  const option = user.options[number]
  alert(option)
  render()
}
     
    const render = () => {
    let templateThree = (
        <div>
           <h1>{user.title}</h1>
          {user.subtitle && <p>{user.subtitle}</p>}
          <p>{( user.options.length>0) ? "here are your options" : "No options"}</p>
          <button disabled={user.options.length===0} onClick= {randomNumber}>What should I do</button>
           
          <ol>
            {
              user.options.map((option)=>{
                  return <li key={option}>{option}</li>
              })
            }
          </ol>
          <button onClick={removeAll}>Remove all</button>
          <br/>
          <br/>
          <form onSubmit={onFormSubmit}>
            <input autoFocus type='text' name='option' autoComplete='off'/>
            <button>Add Options</button>
          </form>
        </div>
    )
    
    ReactDOM.render(templateThree , approot);
}
render()


// const getFirstName = (name) =>{
//     return name.split(' ')[0]
// }

// console.log(getFirstName('Komal Tolambia'))

// const getName = (name) => name.split(' ')[0]

// console.log(getName('Shubham Tolambia'))

// const multiplier = {
//     numbers : [2,4,6],
//     multiplyBy : 9,
//      multiply : ()=>{
//         console.dir(this)
//         return this.numbers.map((number)=>number*this.multiplyBy)
//     }

// }

// console.log(multiplier.multiply());