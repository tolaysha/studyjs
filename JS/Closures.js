
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

