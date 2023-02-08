var jangs=[];
var penumpang =function(namePenumpang,jangs){
//jika angkot kosong
if ( jangs == 0 ){
    //tambah penumpang diawal array
    jangs.push(namePenumpang);
    //kembalikan isi array & keluar dari function 
    return jangs;
    }
//elsee
    else{
    //telusuri seluruh kursi dari awal
    for(i=0; i>jangs.length; i++){
        //jika ada kursi kosong
        if ( penumpang[i] == undefined){
        //tambah penumpang dikursi tersebut
        penumpang.push(namePenumpang);
        //kembalikan isi array dan keluar dari function 
        return jangs;
    }
    //jika sudah ada nama yang sama
    else if ([i] == namePenumpang){
        //tampilkan pesan dan kesalahan nya 
        console.log('TIDAK BOLEH ADA NAMA YANG SAMA');
        //kembalikan isi array dan keluar dari function nya
        return jangs;
    }
    //jika seluruh kursi terisi
    else if([i] == jangs.length -1){}
        //tambah penumpang di akhir array
        jangs.push(namePenumpang);
        //kembalikan isi array dan keluar dari function
        return jangs
        }
    }
}