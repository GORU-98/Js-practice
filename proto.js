const obj={
    name:"gourav",
    course:"mca",
    year:2
}

console.log(obj);

const obj1={
        run:()=>{
            console.log("Hey proto")
        },
        lname:"panchal"

}

obj1.__proto__={
    video:"uploaded"
}
 obj.__proto__= obj1

obj.run();
console.log(`${obj.name } ${ obj.lname}`);
console.log(obj.video);