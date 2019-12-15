let sayHi = function func (who){
    if (who){
        console.log(who)
    } else{
        func('Guesst')
    }
}
sayHi()
//func() func не определена, доступга только внутри функции 