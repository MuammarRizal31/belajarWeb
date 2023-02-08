var jangs = '';
for( var i=0; i < 10; i++){
    for(var j=0; j<=i; j++){
        jangs+='*';
    }
    jangs+='\n';
}
console.log(jangs);

var jange='';
for(var i=10; i>=0; i--){
    for(var j=0; j <= i; j++){
        jange+='*';
    }
    jange+='\n';
}
console.log(jange);

console.log('stop');


var ngee='';
for( var i=10; i >= 0;i--){
    for(var j=0; j<i; j++){
        ngee+='*';
    }
    ngee+='\n';
}
console.log(ngee);