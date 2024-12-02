// const Animal=function(){}
// Animal.prototype.home = function(){
//     console.log("Heloooo");
// }
// const Bird = function(){

// }
// Bird.prototype = Object.create(Animal.prototype);

// const bird = new Bird();
// bird.home();


// const allprogress =(promises,onProgress)=>{
//     let complete=0;
//     return  Promise.all(promises.map(promise=>{
//         promise.then((result)=>{
//             complete++;
//             const percent=(complete/promises.length)*100
//             onProgress(percent.toFixed(2));
//             return result;
//         })
//     })

       
//     )
// }

// const tasks=[
//     ()=>new Promise((resolve)=>setTimeout(()=>resolve("Task1"),2000)),
//     ()=>new Promise((resolve)=>setTimeout(()=>resolve("Task1"),7000)),
//     ()=>new Promise((resolve)=>setTimeout(()=>resolve("Task1"),9000)),
// ]

// allprogress(tasks.map((t)=>t()),(progress)=>console.log(progress)).then((result)=>console.log(result))


// const allprogress=(promises,onprogress)=>{
//     let complete=0;
//     return Promise.all(promises.map((promise)=>{
//          return   promise.then((result)=>{
//                 complete++;
//                 const percentage=(complete/promises.length)*100;
//                 onprogress(percentage.toFixed(2));
//                 return result;
//             })
//     }))

// }

// const task=[
//     ()=>new Promise(resolve=>setTimeout(()=>{resolve("task1")},2000)),
//     ()=>new Promise(resolve=>setTimeout(()=>{resolve("task1")},5000)),
//     ()=>new Promise(resolve=>setTimeout(()=>{resolve("task1")},8000)),
    
// ]

// allprogress(task.map((t)=>t()),(promise)=>console.log(promise)).then((result)=>{
//     console.log(result);
// })

// function sum (){
//     console.log(typeof sum);
//     sum="js"
//     console.log(typeof sum);
// }

// sum()

// let a=5;
// let b=8;

// a=a^b;
// b=a^b
// a=a^b
// console.log(a,b);
// generator function
// function* hey(){
//     let i=0;
//     while(true){
//         yield i++
//     }
// }
// const generator=hey();
// const a = generator.next().value;
// const b = generator.next().value;
// const c = generator.next().value;
// console.log(a,b,c);


// reversing a string
// function reverseStr(a){
//     const arr=a.split("");
//     const arr1=arr.reverse();
//    const arr2=arr1.join("")
//     console.log(arr2);
// }

// reverseStr("12345678")

// var x=1;
// console.log(x);
// function y(){
//     console.log("2");
//     return 1
// }
// function x(){
//     console.log("1");
//     return 1
// }
// x() || y()


// smallest number in array

// const arr=[2,43,6,2,76,2455,87,11,42,42,63,3,222,1,23,];

// const compare=(a,b)=>{
//     return a-b
// }
// const arr1=arr.sort(compare)
// console.log(arr1[arr1.length-1]);

// const arr=[0,1,2,0,321,0,2,30,3,0,5,7,0];

// const arrZero=arr.filter((x)=>{return x===0;
// })
// const arrnonZero=arr.filter((x)=>{return x!==0;
// })
// console.log(...arrZero,...arrnonZero);


// const arrZero=[]
// const arrNonZero=[]
// const x=()=>{
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===0){
//             arrZero.push(arr[i]);
//         }else{
            
//             arrNonZero.push(arr[i]);
//         }
//     }
//   return [...arrZero,...arrNonZero]
// }

// const newarr=x();
// console.log(newarr);

// array empty index
// js create empty slot,and initialization of these slots not happen. to loop we need indexs which are not created
// const arr=[]
// arr[10]=1;
// arr[20]=5;
// arr[100]=89;

// arr.forEach(x=>{
// console.log("hi");
// })
// console.log(2%5);

// const arr=new Array(2)
// console.log(arr);
// // it creates an empty array and for loop need index thus doen not return any value
// arr.forEach(x=>console.log("😎"))

// but if we destructure it we can get the output
// [...arr].forEach(x=>console.log("😎"))


// console.log(Object.is(NaN,NaN));
// console.log(NaN==NaN);
// console.log(NaN===NaN);
// console.log(NaN==NaN);
// console.log(NaN==NaN);


// const str=`let a=5;
// let b=5;
// console.log(a+b);
// `
// setTimeout(str,2000)


// const a=[1,2,3]
// const b=[1,2,3]
// const c=a
// console.log(a===b)
// console.log(a===c)
// console.log(a==b)

// const a="38"
// console.log()
// const b=Number.parseInt(a)
// console.log(typeof b)

// const array=[32,2130,112,23,13]
// const array1=[0,11,23,89]
// delete array[1]
// console.log(array.concat(array1))

// const arr2=array.sort((a,b)=>{
//     return a-b
// })

// const arr2=array.splice(1,-1,11,12)
// const arr2=array.slice(1,3)
// const arr2=array.reverse()
// console.log(arr2)
// console.log(array)

// array.forEach((v,i,a)=>{
//     console.log(v,i,a)

// })

// const obj={
//     name:"shishimanu",
//     loc:"rohtak",
//     class:"mca"
// }

// console.log(Object.keys(obj))
// Object.keys(obj).forEach((v)=>{
//     console.log(obj[v])
// })

// const arr=["goru","panchal"]
// console.log(arr.toUpperCase())

// let a="          GOU    RA   V"
// // let b=a.trim().replace(/\s+/g,"")
// console.log(a.includes("O"))

// const sum=(a,b)=>{
//     // return a+b;
//     console.log(a+b)
// }

// setTimeout(sum,2000,1,99)
// console.log()

// a=1;
// let a;
// console.log(a)
//  a=1;


// function sum(a){
//     return function(b){
//         if(b) return sum(a+b);
//         return a;
//     } 
// }
// const add=sum(23)(3)(565)
// console.log(add())

let a = new Map();

const b = {
    name:"goru"
}

a.set(b,"24")
console.log( a)