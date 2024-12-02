let a = new Promise((resolve,reject)=>{
    console.log("Not resolved");
    setTimeout(()=>{
        resolve(5);
        console.log("Resolved");
    },1500)
});

let b = new Promise((resolve,reject)=>{
    console.log("Not resolved");
    setTimeout(()=>{
        resolve(87);
        console.log("Resolved");
    },3700)
});

let c = new Promise((resolve,reject)=>{
    console.log("Not resolved");
    setTimeout(()=>{
        reject(new Error("Due to network issue"));
        console.log("Rejected");
    },500)
});


// let all_promise = Promise.any([a,b,c]);


// let all_promise = Promise.all([a,b,c]); 1st all method
let all_promise = Promise.allSettled([a,b,c]); 
all_promise.then((value)=>{
    console.log(value);
})
// let all_promise = Promise.race([a,b,c]);