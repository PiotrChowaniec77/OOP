// const szarik = {
//     children: ['fafik', 'żaba'],
//     showChildren: function() {
//         this.children.forEach(function(child, index){
//             console.log(this.children[index])
//         })
//     }
// }


// const szarik = {
//     children: ['fafik', 'żaba'],
//     showChildren: function() {
//         const that = this
//         this.children.forEach(function(child, index){
//             console.log(that.children[index])
//         })
//     }
// }


// const szarik = {
//     children: ['fafik', 'żaba'],
//     showChildren: function() {
//         for (item of this.children) {
//             console.log(item)
//         }
//     }
// }

// const szarik = {
//     children: ['fafik', 'żaba'],
//     showChildren: function() {

//         this.children.forEach((child, index) => {
//             console.log(this.children[index])
//         })
//     }
// }

const szarik = {
    children: ['fafik', 'żaba'],
    showChildren: function() {

        this.children.forEach(function(child, index) {
            console.log(this.children[index])
        }.bind(this))
    }
}

szarik.showChildren()