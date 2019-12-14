
//counter pre
var counter = function(){
	var count = 0;	
	return function(){
		console.log(++count);
	}

}
var counter1 = counter()
var counter2 = counter()
counter1()
counter1()
counter2()

//counter post
var counter = function(){
	var count = 0;	
	return function(){
		console.log(count++);
	}

}
var counter1 = counter()
var counter2 = counter()
counter1()
counter1()
counter2()
//cat pattern
//выведет единицы так как внутри а свой спид, не являющийся ссылкой на спид в каре
var car = function(){
    speed = 1;
    speedUp = function(){
        ++speed; //++this.speed; уточняем контекс, чтобы изменялся спид у а
    }
    return{
        speed:speed, //новая переменная
        speedUp:speedUp
    }
}
var a = car();
console.log(a.speed)
a.speedUp();
console.log(a.speed)
console.log(a.speed)




//2 variant with state
var car = function(){
    let state = {speed:1}
    let speedUp = function(){
        this.speed += 1;
    }
    return{
        speed:state.speed,
        speedUp:speedUp
    }
}
var a = car();
console.log(a.speed)
a.speedUp();
console.log(a.speed)

//самое примитивное замыкание
 
var func = function(){
    var name = 'John'
    return function(){ //эта функция замыкается на контекст выше
        console.log(name)
    }
}
var qw = func();
qw();
//общий пример
var incrementUntil  = function(max){
    if(num >= max) return num
    num++
    incrementUntil(max);
}
num = 0;
var myFunc = function(){
    var num = -1;
    incrementUntil(3)
    console.log(num)
    return num
}
myFunc()
console.log(num)

//генератор доменов
var genereteDomenFunction = function (domen){
    return function(name){
        return `https://${name}.${domen}`
    }
}
var ru = genereteDomenFunction('ru');
console.log(ru('yandex'))
var com = genereteDomenFunction('com');
console.log(com('google'))
