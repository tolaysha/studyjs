/*
    обьекты в js можно использовать как хеш-таблицы(хранить ключ: значение)
    {} - обьектный литерал,
    Новый обьект наследуется от Object.prototype и не имеет собственных свойств
*/
var obj = {
    'bar':'asdfasdf', // JSON будет не валидный, поэтому юзай всегда строковой литерал
    delete :'sdfdf' //выбросит SyntaxError так как delete ключевое слово(в ES5 и меньше)
}
