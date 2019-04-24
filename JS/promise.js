//exemple1 begin
'use strict';

let promise = new Promise((resolve, reject) => {

  // через 1 секунду готов результат: result
  setTimeout(() => resolve("result"), 1000);

  // через 2 секунды — reject с ошибкой, он будет проигнорирован
  setTimeout(() => reject(new Error("ignored")), 2000);

});

promise
  .then(
    result => alert("Fulfilled: " + result), // сработает
    error => alert("Rejected: " + error) // не сработает
  );
//exemple1 end
//exemple2 begin

function shoot(arrow){
    console.log("Вы сделали выстрел...");
    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            Math.random() > .5 ? resolve({}): reject("Вы промахнулись")
        }, 3000);

    });
    return promise;
};

function win(){
    console.log("You win");
    (drink==1)? buyBeer(): giveMoney();
}
function buyBeer(){
    console.log("beer")
}
function giveMoney(){
    console.log("Money")
}
function loose(){
    console.log("You loose")
}
shoot({})
    .then(mark => console.log("Nice shoot"))
    .then(win)
    .catch(loose)

//exemple2 end

//exemple3 begin
'use strict';

// Создаётся объект promise
let promise = new Promise((resolve, reject) => {

  setTimeout(() => {
    // переведёт промис в состояние fulfilled с результатом "result"
    resolve("result");
  }, 1000);

});

// promise.then навешивает обработчики на успешный результат или ошибку
promise
  .then(
    result => {
      // первая функция-обработчик - запустится при вызове resolve
      alert("Fulfilled: " + result); // result - аргумент resolve
    },
    error => {
      // вторая функция - запустится при вызове reject
      alert("Rejected: " + error); // error - аргумент reject
    }
  );

//exemple3 end  