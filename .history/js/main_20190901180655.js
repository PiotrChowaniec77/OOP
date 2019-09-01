const Person = function(name, age) {
    this.name = name
    this.age = age
    this.children = []
    this.addChildren = function(name) {
        children.push(name)
    }
}

const arek = new Person('arek', 20)
const monika = new Person('monika', 20)