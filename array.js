// Reduce function

const arr=[2,3,5,7,1,2,3];
let new_arr = arr.reduce((x,y)=>{
    return x+y
})
console.log(new_arr);

// Filter
let new_arr1 = arr.filter((value)=>{
    return value <5
})
console.log(new_arr1);

// splice 

arr.splice(2,3,11,12,12,122);
console.log("splice " + arr);


let name= "Gourav";
let arr1=Array.from(name);
console.log(arr1);
console.log(arr1.join(" + "));
console.log(arr1.length);

// console.log(console); 
