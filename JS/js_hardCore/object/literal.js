//ы js все ведет себя как обьекты, кроме двуз сключений - null и undefined
console.log(2.toString()) //SyntaxError
console.log(typeof(2..toString()))
console.log(2 .toString())
console.log((2).toString())
//испольуется для работы с числами как с обьектами
console.log(2 .__proto__) // Number 