func()
function func(){
    console.log("func")
    console.log(this === window)
}

console.log("window")
console.log(this === window)


function Vehicle(type){
    this.type = type
}

const car = new Vehicle("car")
