

function GoodNight1(greet,callback){
    console.log("Good night1");
    
    function goodmorning(){
        callback();
        console.log(callback);
        console.log(greet);
    }
    goodmorning()
}


GoodNight1("Good night ! Have a good sleep",GoodNight);

function GoodNight(){
    console.log("Good night");
}