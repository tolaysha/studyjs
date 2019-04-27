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
  showFullName.call(user) // "Василий Петров"
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
