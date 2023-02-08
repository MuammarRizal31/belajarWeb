//console.log ini untuk menampilkan pada console
//window alert ini untuk menampilkan pada popup fungsi sebenarnya berada pada objek window 
//document write ini untuk menampilkan pada HTML
//inner HTML adalah sebuah atribut didalam (objek) elemen HTML yang berisi string HTML
    //dengan inner HTML kita dapat menampilkan output ke elemen yang lebih spesifik

// ini untuk menampilkan pada console
//fungsi console log biasa digunakan untuk debugging.karena setiap pesan error di javascript selalu di tampilkan didalam console
//selain console log,terdapat juga beberapa fungsi untuk debugging seperti console debug,console info,console error,console dir,dsb
console.log('Hello world');

//ini untuk menampilkan pada popup fungsi sebenarnya berada pada objek window 
//secara lengkap bisa ditulis seperti ini
window.alert('helo jangss')

//ini untuk menampilkan pada HTML
document.write('Hello world');

function jangs(){
    alert('sayang');
}

//ini untuk menampilkan string ke dalam objek
var hasil = document.getElementById('hasiloutput'); //membuat objek elemen
hasil.innerHTML = "<p>Aku suka belajar javascript</p>"