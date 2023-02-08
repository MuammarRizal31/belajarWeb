                    //FUNCTION
        //function adalah kunci utama pada javascript yang membuat javascript sangan powerfull

//function deklarasi
function jumlahDuaBilangan (a,b){
    var total;
    total = a + b;

    return total;
}

//function ekspresion
var jangs = function(a,b){
    var total1;
    total1 = a+b;
    return total1;
}


//untuk menggabungkan dan menghitung sisi kubus dengan matematika
var a=8;
var b=3;
var volumeA;
var volumeB;
var total;

volumeA= a * a * a;
volumeB= b * b * b;
var total = volumeA + volumeB;
console.log(total);

//menggunakan function

function menghitungKubus(a,b){
    var a,b,c;
    var hitungA,hitungB;

    hitungA= a*a*a;
    hitungB= b*b*b;
    c=hitungA+hitungB;
    return c;
}

console.log(menghitungKubus(8,3));
console.log(menghitungKubus(10,15));

function tambah(a,b){
    return a + b;
}

var a = parseInt(prompt('Masukan angka yang ingin di tambah : '))
var b = parseInt(prompt('Masukan angka yang ingin di tambah2 : '))
var hasil2 = tambah(a*2,b*2);
console.log(hasil2);


var jangs = parseInt(prompt('Masukan angka yang ingin di pangkat : '));
var nge = parseInt(prompt('Dikali berapa ? '))
function menghitungPangkat(jangse,jnge){
    var tambah;
    var tambah2;
    tambah=jangse*jangse*jangse;
    tambah2=jnge*jnge*jnge;
    
    var hasil=tambah + tambah2;
    return hasil;
}

alert('Hasilnya adalah : '+menghitungPangkat(jangs,nge));

function tambah3(a,b){
    return a+b;
}

function kali(a,b){
    return a * b;
}

var l = parseInt(prompt('Masukan angka yang ingin di tambah : '));
var j = parseInt(prompt('Masukan angka yang ingin di tambah2 : '));
var hasil3 = kali(tambah(l,j),tambah(l,j));
alert('Hasil dari pertambahan '+l+' dan '+j+' adalah : '+hasil3);