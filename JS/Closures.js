
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

