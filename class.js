// class Zomato{
//     order(){
//         console.log("order"); //methods
//     }
//     cash(){
//         console.log("cod");
//     }
//     cancel(){
//         console.log("cancel");
//     }
// }

// let goru= new Zomato();
// let deep= new Zomato();

// goru.order();


// class Zomato{
//     constructor(name,lname,rollno){
//         this.name=name;
//         this.lname=lname;
//         this.rollno=rollno;

//     }
//     order(){
//         console.log(this.name); //methods
//     }
//     cash(){
//         console.log("cod");
//     }
//     cancel(){
//         console.log("cancel");
//     }
// }

// let goru= new Zomato("goru","panchal",23128);
// let deep= new Zomato();

// goru.order();


class Bca{
    constructor(rollno){
            this.rollno=rollno
    }
    dept(){
        console.log("MCA")
    }
    dept1(){
        console.log(this.rollno)
    }
}


class Mca extends Bca{
    admitCard(){
        console.log("No admit card")
    }
    dept1(){
        // super.dept1();
        console.log("dept11")
    }
}
let nekiram=new Bca("111")
let x=new Mca("176")
x.admitCard()
x.dept1();
nekiram.dept();