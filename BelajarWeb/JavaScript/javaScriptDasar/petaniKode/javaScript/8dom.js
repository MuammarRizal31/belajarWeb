//apa itu dom API ?
//DOM MERUPAKAN SINGKATAN DARI DOCUMENT OBJECT MODEL
//artinya,document (HTML) yang dimodelkan dalam sebuah objek
//object dari dokument ini menyediakan sekumpulan fungsi dan atribute/data yang bisa di manfaatkan dalam membuat program javascript.inilah yang sering disebut API

//MENGAKSES ELEMEN TERTENTU DENGAN DOM
//OBJECT DOCUMENT ADALAH MODEL DARI DOKUMEN HTML.OBJECT INI BERISI KUMPULAN FUNGSI DAN ATRIBUTE BERUPA OBJECT DARI ELEMENT HTML YANG BISA DIGAMBARKAN DALAM BENTUK DIBAWAH INI

//                                      |
//                                  |DCOCUMENT|
//                                      |
//                            |ROOT ELEMENT: <HTML>|
//                                     /\
//                                    /  \
//                                   /    \
//                             |HEAD|      |BODY|   
//                                  |      |
//                  |ELEMENT:<TITLE>|      |ELEMENT A:| -- |ATTRIBUTE : 'HREF'|
//                                  |      |    
//                |TEXT : "MY TITLE"|      |TEXT: MY LINK|         
//                                   
//                                   

//mengakses body
document.body;

//mengakses head
document.head;

//melihat panakang judul pada object title
document.title.length;

document.getElementBy;


//apabila kita ingin mengakses elemen yang spesifik ,terdapat beberapa fungsi yang bisa digunakan:
    //-getElementById()       -->fungsi untuk memilih elemen berdasarkan attribute 'id';
    //-getElementByClassName()-->fungsi untuk memilih elemen berdasarkan attribute 'class'
    //-getElementByName()     -->fungsi untuk memilih elemen berdasarkan attribute 'name'
    //-getElementByTagName()  -->fungsi untuk memilih elemen berdasarkan attribute nama tag
    //-querySelector()        -->fungsi untuk memilih elemen berdasarkan query 
    //-querySelectorAll()     -->fungsi untuk memilih elemen berdasarkan query 
        //createElement()     -->untuk membuat element HTML
            //-append()       -->untuk menambahkan isi dari sebuah element
            //-remove()       -->untuk menghapus element
        //contoh
//mengkases kedalam variabel
const jange = document.getElementById('tutorial');

//mengisi text kedalam element
jange.innerText = 'BELAJAR DOM';

//memberikan css ke elemen
tutorial.style.backgroundColor= 'gold';
tutorial.style.padding='15px';
tutorial.style.textAlign= 'center';
tutorial.style.fontWeight='bold';


//bagaimana kalau ada lebih dari satu element yang dipilih ?
//element yang dipilih akan menjadi sebuah array,karena kita memilih sekumpulan element
//contoh

var paragraph = document.getElementsByClassName('paragraph');
console.log(paragraph)
// paragraph[1].style.color="red";
// paragraph[2].style.color="blue";

setInterval(function(){
    paragraph[1].style.color="purple";
    paragraph[2].style.color="green";

    setTimeout(function (){
        paragraph[1].style.color= "gold";
        paragraph[2].style.color= "blue";
    },511)
},1111);
//kita memanfaatkan fungsi setInterval() dan fungsi setTimeOut() untuk menentukan waktu animasinya
//pada kode diatas rentang waktu(interval) kita berikan `1111` mili detik atau 1.1 detik
//sedangakan untuk merubah warnya menjadi gold blue

const hapus = document.getElementById('judulh2');
hapus.remove();
console.log('element sudah di hapus')
console.log(hapus)


//Aplikasi ubah warna
// var ubahWarna = document.getElementById('bg-color');
// var txthWarna = document.getElementById('text-color');

// ubahWarna.addEventListener("change",(event)=>{
//     document.body.style.backgroundColor= ubahWarna.value;
// });

// txthWarna.addEventListener("change",(event)=>{
//     document.body.style.color = txthWarna.value;
// })

var bgColor = document.getElementById('bg-color');
var txtColor = document.getElementById('text-color');

    bgColor.addEventListener('change', (event) => {
        document.body.style.backgroundColor = bgColor.value;
    });

    txtColor.addEventListener("change", (event) => {
        document.body.style.color = txtColor.value;
    });
//kita menggunakan event 'change' pada element 'bgColor' dan txtcolor artinya nanti setiap nilai dari elemen ini dirubah kode dialam nya di eksekusi