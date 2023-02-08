/* Tipe data pada javascript
    -number
    -string
    -boolean
    -object
    -function
    -undefined
*/

/*
didalam javaScript tidak ada bilangan integer yang ada hanya floating point
jangan pernah mengawali javascript dengan angka 0

    -angka tanpa desimal
        -10,1500,123456
        -akurat sampai 15 digit
    -angka dengan desimal
        -3.14
        -0.5
        -100.00
    -eksponen
        -123e5      //123000000
        -123e-5     //0.00123
    -bilangan negatif
*/


            //ARTIMATIKA,PENUGASAN DAN PERBANDINGAN
    //OPERATOR DALAM JAVASCRIPT ADALAH SEBUAH SIMBOL YANG DIGUNAKAN UNTUK MELAKUKAN OPERASI
/*
            //OPERATOR
    -aritmatika
    -penugasan 
    -perbandingan
    -logika 
    -string
    -kondisional    -binary membutuhkan 2 operand
    -typeOf

        //URUTAN DALAM PENGARITMATIKAAN
    -() * / + -
    -kurung kali bagi tambah kurang

        //PENUGASAN
    - -=
    - +=
    - *=
    - %=
    - /=

        //OPERATOR PERBANDINGAN
    - ==        ||      sama dengan                 {akan mengembalikan nilai boolean (true false)}
    - !=        ||      tidak sama dengan
    - ===       ||      strict sama dengan          {jika menggunakan ini harus bertipe integer}{bisa membuat tipe string menjadi integer dan akan mengembalikan nilai boolean}
    - !==       ||      strict tidak sama dengan
    - >         ||      lebih besar dari
    - <         ||      lebih kecil dari
    - >=        ||      lebih besar sama dengan
    - <=        ||      lebih kecil sama dengan

        //OPERATOR LOGIKA
    - &&        ||      AND     {KALO MENGGUNAKAN INI NILAI DARI KEDUANYA HARUS TRUE UNTUK MENGEMBALIKAN NILAI TRUE}
    - ||        ||      OR      {JIKA SALAH SATU KONDISINYA BERNILAI TRUE MAKA HASILNYA AKAN MENGEMBALIKAN NILAI TRUE}
    - !         ||      NOT     {AKAN MENGEMBALIKAN NILAI FALSE}
*/
x = 12;
(x % 4 == 0); // akan mengembalikan nilai true karna x adalah bilangan genap

(x % 4 == 0) || (x < 10); //Akan mengembalikan nilai true karna kalau makai operator logika ini,jika salah satu ada yang benilai true makan hasilnya akan true

        //STRING
10 + 10 + "10"; //maka hasilnya akan 2010;
"10" + 10 + 10; //maka hasilnya akan 101010 semua akan bertipe string

/*
        //TYPE OF
    OPERATOR INI UNTUK MENGETAHUI TIPE DATA APA DARI SEBUAH NILAI
*/
typeof(10); //hasilnya akan number
typeof("10"); //hasilnya akan string
typeof(true); //nilainya akan boolean

/*
        //KONDISIONAL
    OPERATOR INI DIGUNAKAN UNTUK MELAKUKAN PENGECEKAN PADA SEBUAH KONDISI DAN MENENTUKAN NILAI YANG DIHASILKAN JIKA NILAI TERSEBUT BERNILAI TRUE ATAI FALSE
*/
(X % 2 == 0) ? "benar" : 'salah';