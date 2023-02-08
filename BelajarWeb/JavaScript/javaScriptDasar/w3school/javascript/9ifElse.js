var jangs = prompt('Masukan angka : ');
if(jangs % 2 === 0){
    alert(jangs + ' adalah bilangan genap')
}else if(jangs % 2 == 1){
    alert(jangs + ' adalah bilangan ganjil')
}else{
    alert('Yang anda masukan bukan angka')
}

for(angkot=1; angkot<=10; angkot++ ){
    if(angkot <= 6 && angkot != 5){
        console.log('Angkot '+angkot+' beroperasi dengan baik');
    }else if(angkot == 8 ||angkot == 10 || angkot== 5){
        console.log('Angkot '+ angkot+' Sedang lembur bestie')
    }else{
        console.log('Angkot '+angkot+' tidak Beroperasi dengan baik');
    }
}