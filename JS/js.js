function User (name, id){
    this.name = name;
    this.id = id;
    console.log ('rrrrrrrrr' + this)
}
var alex = new User('Alex',12);
console.log(alex);
///пример первого вызова 
function show(a,b){
    console.log(this);
    function Sum(){
        console.log(this);
        return a+b;
    }
    console.log(Sum());
}
show(4,5);