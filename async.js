async function video(){
    let a = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(78)
        },3000)
    })
    let b = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(98)
        },5000)
    })
    let x= await a;
    // let time1=console.time("timer")
    let time1=new Date().getTime();
    let y= await b;
    // let time2=console.timeEnd("timer")
    let time2=new Date().getTime();
    console.log(time2);
console.log("time taken " + time2 - time1);
    return [x,y]
}

video().then((x)=>{
    console.log(x);
})