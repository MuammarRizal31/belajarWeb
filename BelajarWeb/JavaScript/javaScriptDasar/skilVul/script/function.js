/*
apa yang dimaksud dengan funsi (function) di javascript ?
fungsi akan dieksekusi ketika dipanggil dan harus memiliki nilai kembali (return)

//PARAMETER ADALAH SYARAT INPUT YANG HARUS DIMASUKAN KE DALAM SUATU FUNGSI DAN DI DLEKARASIKAN BERSAMA DENGAN FUNGSI.
//ARGUMENT ADALAH NILAI YANG DI MASUKKAN KE DALA SUATU FUNGSI.SESUAI DENGAN PERSYARATAN PARAMETER.DIMANA ARGUMENT DITULISKAN BERSAMAAN DENGAN PEMANGILAN FUNGSI
*/

//fungsi yang berdiri sendiri
function namaFungsi(){
    //kode yang akan di jalankan
    return 'nama saya rizal'
}

//fungsi yang disimpan didalam variable
let namaVarFungsi = function(){
    //kode yang akan dijalankan
    return 'saya lahir dijakarta'
}

alert('Hai nama kamu siapa ? '+namaFungsi());
alert('kamu lahir dimana ? '+namaVarFungsi());

//contoh parameter dan argument
function coba(input1,input2){
    return input1 * input2;
}
console.log(coba(5,2));//hasilnya akan 10

// FUNGSI YANG MEMANGGIL TERLEBIH DAHULU SEBELUM FUNCTION NYA DIBUAT (function hoisting)
console.log(operasiPerkalian(5,5));//output 25
function operasiPerkalian(input1,input2){
    var kali = input1 * input2;
    return kali;
}

//tapi ini tidak berlaku jika fungsi tersebut di deklarasi didalam sebuah variable
//contoh :
console.log(lagi(5,5))//uncaught referenceError
const lagi = function(e,i){
    let hasil = e * i;
    return hasil;
}
console.log(lagi(2,5))