class University{
        dept(name){
            console.log(name);
        }
        course(name){
            console.log(name);
        }
}

class Dept extends University{
    student(count){
        console.log(count);
    }
    course(name){
        super.course(name);
        console.log(name + " is the course");
    }
}

let mdu = new University();
let dcsa = new Dept();

mdu.dept("sanskrit");
dcsa.dept("maths");
dcsa.course("imsar");