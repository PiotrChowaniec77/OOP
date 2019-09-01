class Animal {
    constructor(name, species) {
        this.name = name;
        this.species =species;
    }
    eat() {
        console.log(`${this.name} jakie dobre mówi ${this.species}`)
    }
}
const dog = new Animal("Burek", "Pies")
