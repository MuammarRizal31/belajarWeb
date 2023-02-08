var penumpang =[];
var tambahPenumpang = function(namaPenumpang,penumpang){
    //jika angkot kosong
    if ( penumpang.length == 0){
        //tambah penumpang diawal array
        penumpang.push(namaPenumpang);
        //kembalikan isi array & keluar dari function 
        return penumpang;
    }
    //else
    else{
        //telusuri seluruh kursi dari awal
        for (i=0; i<penumpang.length; i++){
            //jika ada kursi kosong
            if ( penumpang[i] == undefined){
                //tambah penumpang dikursi tersebut
                penumpang[i] = namaPenumpang;
                //kembalikan isi array dan keluar dari function 
                return penumpang;
            }
            //jika sudah ada nama yang sama
            else if(penumpang [i] == namaPenumpang ){
                //tampilkan pesan dan kesalahan nya
                console.log('Maaf tidak boleh ada nama yang sama,didalam sudah ada namanya' + namaPenumpang)
                //kembalikan isi array dan keluar dari function nya
                return penumpang;   
            }
            //jika seluruh kursi terisi
            else if(i == penumpang.length - 1){
                //tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                //kembalikan isi array dan keluar dari function
                return(penumpang);
            }
        }
    }
}