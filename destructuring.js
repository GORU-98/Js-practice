const arr=[2,3,4,5,6,7,8];
// arr[0]=1
const [a,,,...x]=arr
const [b,c,...y]=x
// const [a,b,c,...x]=arr
// const [a,b,c]=arr
// console.log(a,x);
// console.log(b,c,y);

// const obj={...arr}
// console.log(obj);

const obj1={
    name:"pikachu",
    work:"backend",
    contact:{
        phone:9888727873,
        email:"goru@"
    }
}

// const {contact:{phone,email}} = obj1
// // console.log(name);
// // console.log(work);
// console.log(phone);
// console.log(email);

console.log({...obj1,name:"raichu"})


