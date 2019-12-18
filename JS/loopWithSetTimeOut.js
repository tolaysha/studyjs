
for(var i = 0; i < 10; i++){
    (function (i){
        setTimeout(function(){console.log(i)},100)
    })(i);
}
//1,2,3,4,5,6,7,8,9,10


for(var i = 0; i < 10; i++){

    setTimeout((q = i)=>{console.log(q)},100);
    
    
    
}
//10(10)