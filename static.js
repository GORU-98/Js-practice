class Fruit{
    constructor(name,color){
        this.name=Fruit.capital(name)
        this.color=Fruit.capital(color)
    }
    Color(){
        console.log(`${this.name} is of ${this.color} color`);
    }
    static capital(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length)
    }
}

let abc = new Fruit("apple","red")
abc.Color();
console.log(abc.Color() instanceof Fruit)