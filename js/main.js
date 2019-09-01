


// const Family2 = function(name){
    //     this.name =name
    // }
    // const kowalscy = new Family('kowalscy')
    // Family2.prototype.addMember = function(){

// }

class Family {
    constructor(name) {
        this.name =name
    }
    addMember() {

    }
}
const nowakowie = new Family('nowakowie')

const Family2 = function(){

}
function Family3(){

}

class Family4 {

}
const Family5 = class {

}

class Family6 {
    constructor(members, ...names){
        this.members = members
        this.names = names
    }
    addMember(newMember) {
        this.names.push(newMember)
        this.members++
        console.log(`Dodano ${newMember}`)

    }
    static makeFamily(...members){
        return members
    }
}

const kowalscy = new Family6(3,"piotr", 'Jan', "krzysztof")
kowalscy.addMember("jaś")

const kwiatkowscy = new Family6(1,"piotr")

