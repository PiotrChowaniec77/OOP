class Animal{
    constructor(age, name) {
        this.age = age
        this.name = name
    }
    breathe() {
        console.log('Zwierze oddycha')
    }
}

const Zwierze = new Animal(2, "Artek")

class Mammal extends Animal {
    constructor(age, name, hairs){
        super(age, name)
        this.hairs = hairs
    }
    drinkMilk(){
        console.log("Ssaki piją mleko")
    }
}

const ssak = new Mammal(3, "Maks", "blond")


class Human extends Mammal {
    constructor(age, name, hairs, language){
        super(age, name, hairs)
        this.language = this.language
    }
    speak(){
        console.log("człowiek mówi")
    }
}

const człowiek = new Human(34, "Roman", "ciemne", "polski")