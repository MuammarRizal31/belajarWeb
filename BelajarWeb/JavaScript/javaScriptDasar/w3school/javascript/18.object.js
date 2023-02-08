//membuat object
//cara 1 - function declaration
function halo(){
    alert('hai')
}
halo();

// cara 2 - object literal
var obj = {};
obj.halo = function(){
    alert('Halao')
}
obj.halo()

//cara 3 - constraktor
function Halo(){
    alert('YOYOOYOYOYOY');
}
new Halo();