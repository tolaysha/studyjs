///пример первого вызова 
function show(a,b){
    console.log(this);
    function Sum(){
        console.log(this);
        return a+b;
    }
    console.log(Sum());
}
show(4,5)