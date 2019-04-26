/*Промисификация – это когда берут асинхронный функционал и делают для него обёртку, возвращающую промис.
После промисификации использование функционала зачастую становится гораздо удобнее.
В качестве примера сделаем такую обёртку для запросов при помощи XMLHttpRequest.
Функция httpGet(url) будет возвращать промис, который при успешной загрузке данных с url будет переходить в fulfilled с этими данными,
а при ошибке – в rejected с информацией об ошибке: */


function httpGet(url) {

    return new Promise(function (resolve, reject) {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
       // xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
        
        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };
        xhr.onerror = function () {
            reject(new Error("Network Error"));
        };

        xhr.send();
    });

}
/*Как видно, внутри функции объект XMLHttpRequest создаётся и отсылается как обычно,
  при onload/onerror вызываются, соответственно, resolve (при статусе 200) или reject. */

httpGet("/JS/user.json")
    .then(
        response => console.log(`Fulfilled: ${response}`),
        error => alert(`Rejected: ${error}`)
    );
}
