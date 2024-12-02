class Sum{
    constructor(n1,n2){
        this.n1=n1
        this.n2=n2
    }

    add(num){
        console.log(this.n1 + num.n1);
        console.log(this.n2 + num.n2);
        console.log(typeof num);
        console.log(num);
    }
}

let a = new Sum(2,8);
let b = new Sum(10,3);

a.add(b);