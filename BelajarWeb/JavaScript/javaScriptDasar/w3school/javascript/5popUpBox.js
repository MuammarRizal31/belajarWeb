        /*beberapa bagian dari popUpBox
        -alert      : hanya memberikan pesan sederhana ke user
        -prompt     : digunakan untuk membuat box/pengisian pada popup (mengembalikan nilai)
        -confirm    : digunakan untuk meminta confirmasi dari user  //biasa digunakan untuk mendelete data,akan mempertanyakan lagi
        */

alert('Hello selamat Datang');

var nama = prompt('Masukkan nama anda : ');
alert('Hallo selamat datang di website kami '+nama);

var tes = confirm('Kamu ingin menghapus pilihan ini ?');
if(tes === true){
    var nge = confirm('Anda yakin ingin menghapus ini ?');
    if(nge === true){
        alert('Selamat anda menghapus ini');
    }else{
        alert('ya anda tidak jadi menghapus ini');
    }
}else{
    alert('Anda membatalkan menghapus ini');
}

var jangs = prompt('Siapa nama anda ?');
alert('Selamat datang tuan '+jangs+' Di website kami');

alert('Hallo selamat datang di perulangan');
var lagi = true;
while (lagi === true){
    var nama = prompt('Masukan nama : ');
    alert('Hallo ' + nama);

    lagi = confirm('Coba lagi ?');
}

alert('terima kasih');