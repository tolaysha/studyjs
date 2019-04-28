//callbegin
//============================================================================

function showFullName() {
    console.log( this.firstName + " " + this.lastName );
}
  
var user = {
    firstName: "Василий",
    lastName: "Петров"
};
  
// функция вызовется с this=user
showFullName.call(user);// "Василий Петров"

//call end

//apply begin
//============================================================================
/*Метод apply
Если нам неизвестно, с каким количеством аргументов понадобится вызвать функцию, можно использовать более мощный метод: apply.

Вызов функции при помощи func.apply работает аналогично func.call, но принимает массив аргументов вместо списка.
*/
showFullName.call(user, 'firstName', 'surname');
//однохуйственно
showFullName.apply(user, ['firstName', 'surname']);

//Преимущество apply перед call отчётливо видно, когда мы формируем массив аргументов динамически.
//При помощи apply мы могли бы найти максимум в произвольном массиве, вот так:

var arr = [];
arr.push(1);
arr.push(5);
arr.push(2);

// получить максимум из элементов arr
console.log( Math.max.apply(null, arr) ); // 5

// bonus (Одалживание метода)
function printArgs() {
    arguments.join = [].join; // одолжили метод (1)
  
    var argStr = arguments.join(':'); // (2)
  
    console.log( argStr ); // сработает и выведет 1:2:3
}
  
printArgs(1, 2, 3);

//task1
//reduce begin
var arr = [1, 2, 3, 4, 5]

// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
var result = arr.reduce((sum, current) =>
  {return sum + current;}
, 0);
//reduce end
function sumArgs() {
    // запустим reduce из массива напрямую
    return [].reduce.call(arguments, function(a, b) {
    return a + b;
    });
}
//alert( sumArgs(4, 5, 6) ); // 15


//task2 
function sum() { // суммирует аргументы: sum(1,2,3) = 6
    return [].reduce.call(arguments, function(a, b) {
      return a + b;
    });
};
function  applyAll(func){
	return func.apply(this, [].splice.call(arguments,1));
	//console.log(arguments[0](...arg));
};

console.log(applyAll(sum,2,3));