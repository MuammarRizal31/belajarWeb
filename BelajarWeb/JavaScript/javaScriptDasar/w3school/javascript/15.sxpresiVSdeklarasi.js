function manggil(jange){
    alert('Hello ' + jange);
}
manggil('jange')

manggilLagi('muammar rizal')
function manggilLagi(nama){
    alert('Hello '+nama);
}

//function expresion
// -harus didefinisikan dahulu sebelum dipanggil,contoh seperti dibawah
// -lebih powerfull
//     -sebagai closure
//     -sebagai argumen untuk function lain

var tampilkan = function(name){
    alert('halo '+name);
}

tampilkan('jangssss');