var jangs = parseInt(prompt('Masukan angka : '))
if(jangs === 1){
    alert('Angka yang anda masukan adalah '+jangs);
}if(jangs === 2){
    alert('Angka yang anda masukan adalah '+jangs);
}
else{
    alert('Angka yang anda masukan salah')
}

var nge = parseInt(prompt('Masukkan angka anda dalam switch ini : '))
    switch(nge){
        case 1:
            alert('Anda memasukan angka satu');
            break;
        case 2:
            alert('anda memasukan angka dua');
            break;
        case 3:
            alert('Anda memasukan angka tiga');
            break;
        default:
            alert('angka yang anda masukan salah,anda harus mengubah variabel nya menjadi integer dulu');
            break;
    }


var makanan = prompt('Masukan makanan yang ingin anda makan : cth(daging,susu,kopi,beer,alcohol)')
    switch(makanan){
        case 'susu':
        case 'daging':
            alert('yaa makanan ini sangat sehat bung');
            break;
        case 'kopi':
            alert('jangan terlalu sering minum ini bung,anda akan mengalami tua yang jelek');
            break;
        case 'beer':
            alert('yaa ini boleh saja tapi jangan terlalu banyak meminum nya');
            break;
        case 'alcohol':
            alert('anda sebaiknya jangan meminum ini bung,karna sangat memabukkan');
            break;
        default:
            alert('pilih yang ada anj jangan yang gaada');
            break;
    }