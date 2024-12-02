// 1,1,2,3,5,8,13,21,34
const fiboo=(n)=>{
    if(n==1 || n==2){
        return 1;
    }
    return fiboo(n - 2) + fiboo( n-1 )
}

const value = fiboo(9)
console.log(value);