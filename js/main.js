const Person = function(name, age) {
  this.name = name;
  this.age = age;
  this.children = [];
  // this.addChildren = function(name) {
  //     this.children.push(name)
  // }
};

Person.prototype.addChildren = function(name) {
  this.children.push(name);
};

const arek = new Person("arek", 20);
const monika = new Person("monika", 20);

class User {}

const marta = new User();

const darek = new marta.constructor();

function Citizen(country, citizenship) {
  this.country = country;
  this.citizenship = citizenship;
  // this.changeCitizensip = function(changeCiti) {
  //     this.citizenship = changeCiti
  // console.log(`Zmiana za pomocą metody w instancji na obywatelstwo ${this.citizenship}`)
  // }
}

Citizen.prototype.changeCitizensip = function(changeCiti) {
  this.citizenship = changeCiti;
  console.log(
    `Zmiana za pomocą metody w prototypie na obywatelstwo ${this.citizenship}`
  );
};

const zenek = new Citizen("Polske", "polskie");
const marysia = new Citizen("Francja", "niemieckie");

const arr = [5, 6, 7];
Array.prototype.delete = function(index) {
  return this.splice(index, 1);
};

zenek instanceof Array
zenek instanceof Object
zenek instanceof Citizen

Object.getPrototypeOf(arr)


