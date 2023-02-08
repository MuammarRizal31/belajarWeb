for( var a=1; a>=11; a++){
    console.log('hello jangs ke' + a);
}

var jmlAngkot=11;
var angkotBeroperasi=6;
var noAngkot=1;
while(noAngkot <= angkotBeroperasi){
    console.log('angkot no '+noAngkot+ ' Beroperasi dengan baik');
    noAngkot++;
}
for(angkotBeroperasi++; angkotBeroperasi < jmlAngkot; angkotBeroperasi++){
    console.log('Angkot no.' +angkotBeroperasi+' Tidak beroperasi')
}

var jmlTaxi = 11;
var taxiBeroperasi=6;
var noTaxi = 1;
while(noTaxi <= taxiBeroperasi){
    console.log('Taxi '+noTaxi+' Beroperasi dengan baik');
noTaxi++;
}
for(var noTaxi = taxiBeroperasi+1;noTaxi <= jmlTaxi; noTaxi++){
    console.log('Taxi '+noTaxi+' Sedang tidak beroperasi')
}