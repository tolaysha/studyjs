function makeArray(){
    debugger;
    var items = [];
    for (var i=1; i<0 ; i++){ 
        var item = function() {
            console.log(i);
        };
        items.push(item);
    }
    return items;
}
var array = makeArray();
array[1]();
array[3]();
array[7]();