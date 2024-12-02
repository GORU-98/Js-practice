const arr=[1,2,3,3,2,3,5,6,7,9];
const obj1={
    name:"goru",
    marks:32
}
const obj=new Set(arr);
// const obj=new Set(obj1);

console.log(obj.has(2));
console.log(obj);
console.log(obj.add("goru"));
console.log(obj.add("goru"));
console.log(obj);

obj.forEach(e=>{
    console.log(e);
})

const objMap = new Map(arr);
console.log(objMap);