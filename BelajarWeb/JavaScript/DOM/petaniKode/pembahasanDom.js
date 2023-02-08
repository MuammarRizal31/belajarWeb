//apa itu dom API ?
    //-dom merupakan singkatan dari object document model
    //-object dari document ini menyediakan sekumpulan fungsi dan attribute/data yang bisa kita menfaatkan dalam membuat program javascript inilah yang kita sebut dengan API

//didalam object document,terdapat fungsi fungsi dan atribute yang bisa kita gunakan untuk memanipulasi halaman HTML
//sebagai contoh 
document.write()
    //fungsi ini digunakan untuk menulis sesuatu ke document HTML

//  MENGAKSES ELEMENT TERTENTU DENGAN DOM
    //object document adalah mode dari dokumen HTML.objek ini berisi kumpulan fungsi dan atribute berupa object dari elemen HTML yang bisa digambarkan dalam bentuk pohon seperti INI:
/*
                                                                    |DOCUMENT|
                                                                        |
                                                                        |
                                                                  |ROOT ELEMENT|
                                                                    <hthml>
                                                                       /\
                                                                      /  \
                                                                     /    \
                                                               |<HEAD>| |<BODY>|
                                                                  |        |
                                                               |TITLE|    <a> ---attribute: HREF
                                                                  |        |
                                                               |TEXT|    |TEXT|
                                                              MY TITLE     |
                                                                        |MY LINK|

STRUKTUR POHON INI AKAN MEMUDAHKAN KITA DALAM MENGGUNAKAN ELEMEN TERTENTU
*/

//MENGAKSES OBJECT HEAD
document.head;

//mengakses object body
document.body;

//mengakses panjang judul pada object title
document.title.length;


//apabila kita ingin mengakses element secara spesifik
getElementById //Fungsi ini untuk mengakses element berdasarkan attribute id nya
var tutorial = getElementById("tutorial");
tutorial.style.backgroundColor="lightblue"

getElementsByClassName //Fungsi ini untuk mengakses element berdasarkan attribute class nya
var ambilClass = document.getElementsByClassName("tutorial")[1] //bisa pakai index array disini ataupun dibawah nya
//bagaimana jika ada lebih dari satu element yang dipilih ?
//element yang dipilih akan menjadi sebuah array.karena kita memilih sekumpulan element
ambilClass[2].style.padding="35px"

getElementByName    //Fungsi ini untuk mengakses element berdasarkan attribute name
getElementsByTagName // fungsi ini untuk mengakses element berdasarkan attribute nama tag nya
getElementsByTagNameNS // fungsi ini untuk mengakses element berdasarkan attribute nama tag nya
querySelector() //Fungsi ini untuk memilih element berdasarkan query
querySelectorAll() //Fungsi ini untuk memilih element berdasarkan query
//fungsi fungsi diatas cukup sering digunakan untuk mengakses element tertentu

let jange = document.getElementsByClassName("jange");
jange[1].style.color="red";

const nge = document.getElementsByClassName("jange");
setInterval(function(){
    paragraf[0].style.color="green";
    paragraf[1].style.color="yeelow";
    paragraf[2].style.color="red";

    setTimeOut(function (){
        nge[0].style.color="black";
        nge[1].style.color="black"
        nge[2].style.color="black"
    },500)
},1000)
