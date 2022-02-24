console.log('person.js running')

const isAdult = x => {
    if(x>= 18){
       return console.log(true)
    }
     return console.log(false)
}


const canDrink=(x)=>{
  if(x>=21){
      return console.log('can drink')
  }
  return console.log("can't drink")
}

const isSenior=(x)=>x>=60
// export default isSenior
// export default (x) => x>= 60
export { isAdult , canDrink , isSenior as default}