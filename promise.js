// let a = new Promise((resolve,reject)=>{
//     console.log("Not resolved");
//     setTimeout(()=>{
//         resolve(5)
//         console.log("fulfilled");
//     },3000)
// })


// a.then((value)=>{
//     console.log(value);
// }).catch((e)=>{
//     console.log(e);
// })


let a = new Promise((resolve,reject)=>{
    console.log("Not resolved");
    setTimeout(()=>{
        resolve(5)
        console.log("fulfilled");
    },3000)
})


a.then((value)=>{
    console.log(value);
    return value
}).then((value)=>{
console.log(value);
})