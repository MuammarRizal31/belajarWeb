//-length untuk mengetahui banyak nya aray
//-join untuk menggabungkan seluruh array dan menguubah nya menjadi sring
//-push,pop,shift,unshift untuk menambah / menghapus elemen terakhir sebuah array
//-slice dan splice untuk mengambil / menghapus beberapa bagian pada array
//-foreach & map method ini untuk melakukan looping pada array
//-sort untuk mengurutkan array
//filter,find untuk mencari elemen pada array
    // -filer bisa mengembalikan banyak nilai
    // -find mengembalikan satu nilai

var namaSaya = ['rizal','jange','jangs','muammar','topet'];
console.log(namaSaya[3]);
// atau bisa juga begini
var jangs=[];
jangs=['jange','ni','brow']
console.log(jangs[1]);

//elemen pada array boleh berbeda tipe data
var a =['a','b','c','d','e'];
console.log(a.length);

var b =[1,2,3,4,5];
console.log(b[2]);

var c =['jange',2,false,];
console.log(c);

var myfunc = function(){
    alert('hello world!');
}
var d=['text',2,false,myfunc];

var e=['text',2,false,myfunc,[1,2,3,[3,4,5]]];
console.log(e[4][1]);

//menambahan isi array
var abc=[];
abc[0] = 'Muammar'
abc[1] = 'jangs';
abc[2] = 'ngee';
document.write(abc[2]);

//menghapus isi array
abc[0] = undefined;
document.write(abc);

var mno = ['rizal','jangs','jange','ngee','ijal'];
for( i=0; i<mno.length;i++){
    console.log('Nama panggilan '+(i+1)+' saya : '+mno[i]);
}


//method pada array
// 1. join untuk mengubah array menjadi string
// console.log('JOIN')
// var jangeee = ['muammar','rizal','wakwaw']
// console.log(jangeee);
// console.log(jangeee.join(' - '));

// 2. push / pop untuk menambahkan/menghapus elemen terakhir di akhir array nya
//jangeee.pop(); //untuk menghapus elemen terakhir sebuah array
// jangeee.push('jangee','jangelagi'); //untuk menambahkan elemen terakhir sebuah array

// console.log(jangeee)

// 3. unshift dan shift untuk menambahkan/menghapus elemen baru di awal array nya
// console.log('UNSHIFT DAN SHIFT');
// jangeee.unshift('jlkaisin'); //untuk menambahkan elemen pertawa dari sebuah array
// console.log(jangeee.join(' - '))
// jangeee.shift(); //untuk menghapus elemen pertama dari sebuah array
// console.log(jangeee.join(' - '))

// 4. slice dan splice

// splice(indexAwal,maudiHapusBerapa,elemenBaru1,elemenBaru2,...)
// var jangeee = ['muammar','rizal','wakwaw']
// console.log('SPLICE DAN SLICE')
// jangeee.splice(0,1,'Jange','jangss');
// console.log(jangeee.join())

//slice untuk mengambil beberapa bagian di dalam array
//slice(awal,akhir)
// var jangsee =['satu','dua','tiga','empat','lima']
// var jangeee2 = jangsee.slice(2,5);

// console.log(jangeee.join(' - '));
// console.log(jangeee2.join(' - '));

//5 foreach & map
var ang = [1,2,3,4,5,6,7,8,9];
//  -FOR EACH
    // for( i=0; i< ang.length;i++){
    //     console.log('Angka : '+i)
    // }
    // var namanama=['Muammar','rizal','jange','bontot','anak rajin']
    // ang.forEach(function (e){
    //     console.log(e);
    // })

    // namanama.forEach(function(k,a){
    //     console.log('Nama anda yang '+(a+1)+' adalah : '+k);
    // })

//  -MAP
    // var anggg = [1,4,5,3,2];
    // var anggg2 = anggg.map(function (z){
    //     return z * 2;
    // });
    // console.log(anggg2.join(' - '))

//6. SORT untuk mengurutkan array
    // var gh = [1,11,9,3,21,5,2,6,4,7,8];
    // console.log(gh.join(' - '));
    // gh.sort(function(aaa,bbb) {
    //     return aaa-bbb;
    // });
    // console.log(gh.join(' - '));

//7. FILTER & FIND
var lagi =[1,5,2,3,9,8,71,22,41]
var lagi2 = lagi.filter(function (x){
    return x > 5;
});
console.log(lagi2.join(' - '));