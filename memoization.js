let sum=0;
const calc=(n)=>{
    for(let i=0;i<=n;i++){
        sum +=i;
    }
    return sum
}
// console.log(calc(10));

const memoize=(funct)=>{
    let cache={};

    return function(...args){
        let n=args[0];
        if(n in cache){
            console.log("In cache part");
            // console.log(cache);
            return cache[n];
        }else{
            console.log("first time calculating");
            let result=funct(n);
            cache[n]=result;
            return result;
        }

    }
}
console.time();
let calcs=memoize(calc);
console.log(calcs(5));
console.timeEnd();

console.time();
console.log(calcs(6));
console.timeEnd();

console.time();
console.log(calcs(7));
console.timeEnd();

