let obj={
    taste:"bitter",
    color:"red",
    price:234,
  show:function (){
//    return this;
   console.log(this);
setTimeout(function(){
    console.log(this.color);
})
    }
    
};

console.log(obj.show());
