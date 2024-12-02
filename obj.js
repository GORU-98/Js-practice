const obj={
    Name:"Gourav",
    LastName:"Panchal",
    Course:"Mca",
    RollNumber:23128,
    show:function(){
        console.log(this)
        setTimeout(()=>{
            
            console.log(this)
        },2000)
    }
};

obj.show()
// console.log(Object.keys(obj));
// for(let i=0;i<Object.keys(obj).length;i++){
//     console.log("value of "+ Object.keys(obj)[i] + " is " + obj[Object.keys(obj)[i]] );
// }

// for(let a in obj){
//     console.log(obj[a]);
// }

// let fruit="App\rle";
// console.log(fruit.length);
// console.log(fruit);

// let Name= "Gourav";
// let course = "Mca"
// console.log(Name.concat(" is a student of ",course," course"));