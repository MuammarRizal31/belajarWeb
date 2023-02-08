let a = 0;
while (a < 5){
    console.log('push up teros'+(a+1));
    a++;
}

// let ulang = parseInt(prompt('Masukan angka yang anda mau : '));
// alert('Oke pengulangan yang anda inginkan adalah : '+ulang);
// while(ulang > 0){
//     alert('Pengulangan tinggal : '+ulang);
//     ulang--;
// }

// let pengulanganL = confirm('Anda ingin mencoba perulangan ? ')
// if( pengulanganL === true){
//     let berapa = parseInt(prompt('Berapa kali anda ingin melakukan pengulangan ? '));
//     confirm('anda ingin melakukan pengulangan sebanyak '+ berapa+' ?');
//     while(berapa > 0){
//         alert('Anda telah melakukan perulangan yang '+berapa)
//         berapa--;
//     }
// }else{
//     alert('Anda tidak melakukan pengulangan');
// }

// let angka =0;
// let jange = confirm('Anda ingin melakukan perulangan ? ');
// if (jange == true){
//     alert('Baik kita mulai');
//     while(jange ){
//         angka++;
//         alert('Anda telah melakukan perulangan sebanyak '+angka)
//         jange = confirm('Anda mau melakukan nya lagi ? ')
//     }
// }else{
//     alert('Anda tidak mau melakukan perulangan');
// }
// alert('Anda telah melakukan perulangan sebanyak '+angka)

//perulangan while
let huruf=0;
let ij = confirm('Anda ingin melakukan perulangan ? ');
while(ij){
    alert('ini sudah perulangan ke : '+(huruf+1));
    huruf++;
    ij = confirm('anda ingin melakukan nya lagi ? ');
}if(ij == false){
    alert('Anda tidak melakukan looping')
}

//      PERULANGAN DO WHILE
//perbedaan dari perulangan while biasa adalah do/while akan melakukan perulangan sebnyak 1kali terlebih dahulu,lalu mengecek kondisi yang ada di dalam kurung 'while'
//perulangan do/while akan mengecek kondisi dibelakang(sesudah mengulang),sedangkan while akan mengecek kondisi di depan atau diawal(sebelummengulang)
const loop = confirm('apakan anda ingin melakukan perulangan ? ')
const loop2 = 0;
    do{
     loop2++;
     loop =confirm('Anda ingin melakukan nya lagi ? ')   
    }while(loop);