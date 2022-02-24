class Person{
    constructor(name = 'Anonymous', age = 0){
        this.name = name,
        this.age = age
    }

    greetings(){
        return `description : ${this.name} is ${this.age} year(s) old.`
    }
}

const me = new Person('KOmal Tolambia')
console.log(me.greetings())

class Traveller extends Person{
    constructor(name,age=0,location){
        super(name,age)
        this.location = location
    }

    getDescription(){
        let greetings = super.greetings()
        console.log(3700 * 4)
        let description = greetings
        if(this.location){
       return  description += ` I want to visit ${this.location}`
        }
        return description;
    }
}

const person = new Traveller('Komal Tolambia', undefined , 'ladnun')
console.log(person.getDescription());
