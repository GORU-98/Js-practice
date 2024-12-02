class Human{
    constructor(name,gender,age,color){
            this.name=name
            this.gender=gender
            this.age=age
            this.color=color
    }
    walk(){
        console.log(`${this.name} is walking`);
    }
    sing(){
        console.log(`${this.name} can sing`);
    }
    gender(){
        console.log(`${this.name} is a ${this.gender}`);
    }
    color1(){
        console.log(`${this.name} is  ${this.color}`);
    }
}

class Student extends Human{
    // constructor(){
    //     super();
    //     // console.log(`${this.age} is a valid age`);
    // }

    learn(){
        console.log(`${this.name} is a good learner`);
    }
    color1(){
        super.color1();
        console.log(`${this.name} is  ${this.color} but not that much`);
    }
}

let a = new Student("nobita","male",21,"black");
let b = new Human("nobita","male",21,"black");

a.learn();
b.color1();
a.color1();
b.sing();
b.walk();