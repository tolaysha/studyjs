var first = document.querySelector('#first'),
    second = document.querySelector('#second'),
    result  = document.querySelector('#result');

first.addEventListener('change', qwe =>{
    result.innerHTML = `result = ${+first.value+(+second.value)}`;
});  
second.addEventListener('change', function (){
    result.innerHTML = `result = ${+first.value+(+this.value)}`;
});     