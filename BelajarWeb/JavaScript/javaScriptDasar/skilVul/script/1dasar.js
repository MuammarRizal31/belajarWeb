//7 TIPE DATA YANG ADA DIDALAM JAVASCRIPT
//-STRING - DERETAN KARAKTER YANG DIAPIT OLEH SEPASANG TANDA KUTIP
//-NUMBER - BILANGAN BULAT,PECAHAN DAN LAIN LAIN
//BOOLEAN - NILAI BENAR DARI SEBUAH PERNYATAAN YANG DITULISKAN SEBAGAI TRUE DAN FALSE
//NULL - SEBUAH NILAI YANG BERARTI KOSONG ATAU MENUNJUK PADA NILAI YANG TIDAK ADA;
//UNDEFINED - BERBEDA DARI NULL,undefined menandakan kondisi variabel yang belum diberi sebuah nilai.
//symbol - sebuah nilai unik yang dihasilkan tiap kali kita memanggil fungsi sympol.nilai unik ini memiliki beberapa kegunaan seperti memberi nomor identifikasi unik dan berperan sebagai nama produck unik sebuah objek
//object - sebuah kupulan pasangan properti dan nilai.seperti objek dalam kehidupan sehari hari saja.misalnya objek apel memiliki properti warna dan dengan nilai merah

//penjumlahan
let bilangan1 = 10;
let bilangan2 = 5;
console.log(bilangan1 + bilangan2);

//perkalian
bilangan1 = 75;
bilangan2 = 2;
console.log(bilangan1 * bilangan2);

//OPERATOR      ||      DESKRIPSI
//==            ||      sama dengan (cek nilai)
//===           ||      sama dengan (cek nilai dan tipe data)
//!=            ||      tidak sama dengan (cek nilai)
//!==           ||      tidak sama dengan (cek nilai dan tipe data)
// >            ||      lebih dari
// <            ||      kurang dari
// >=           ||      lebih dari atau sama dengan
// <=           ||      kurang dari atau sama dengan
// ? :          ||      ternary operator 

//operator == (loose equality)

let bilangan = 10;
console.log(bilangan == 10); //output : true;
console.log(bilangan == 8); //output : false;
console.log(bilangan == '10'); //output: true;

/*
mari kita coba perhatikan bilangan == "10".kenapa output nya bisa true ? karena didalam javascript jika operand nya berbeda tipe data,maka salah satunya akan di paksa berubah tipe datanya(type coercion) agar mereka sama dan bisa di bandingkan
-----> CATATAN <--------
Yang dimaksud dengan operand adalah nilai yang digunakan didalam sebuah proses operasi.misalnya dalam operasi penjumahan 1+2 yang tergolong operand adalah angka 1 dan 3 
*/



//OPERATOR TERNARY
/*
DIGUNAKAN UNTUK MEMBERIKAN NILAI PADA VARIABLE SESUAI DENGANN KONDISI YANG DITENTUKAN
CONTOH DIBAWAH
let = (kondisi true) ? nilai1 : nilai2;
artinya apabila kondisi true,maka variabel akan diberi nilai1
apabila kondisi false,maka variable akan diberi nilai2
*/

let makanan = "daging";
let jenisMakanan = makanan === "daging" ? "enak":"gaenak";//output karnivora
console.log(jenisMakanan)


        //OPERATOR LOGIKA 
        /*
            &&
            ||
            !
        */

let logika = 6;
let logika2 = 7;
console.log(logika === 6 && logika2 === 7 );//true
console.log(logika === 5 && logika2 === 7 );//false..karna salah satu ada yang false
console.log(logika === 6 || logika2 === 7 );//true
console.log(logika === 6 || logika2 === 9 );//true...karna diantara nya da yang bernilai true;
console.log(logika != 6);//false karna logika tidak sama dengan 6

        //TIPE DATA PRIMITIVE DAN NON PRIMITIVE 
//TIPE DATA PRIMITIVE ITU HANYA PUNYA VALUE TIDAK PUNYA PROPERTI ATAU METHOD CONTOH
    //-number,boolean,string,null,long,double
//TIPE DATA NON PRIMITIVE ARTINYA TIDAK DIDEFINISIKAN SECARA DEFAULT HARUS DI ISI SENDIRI SEPERTI ARRAY,DAN CLASS LAINNYA DIMANA DIDALAM NYA TERDAPAT STRING INT DLL