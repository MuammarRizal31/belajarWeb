// function Angkot(namaSupir,jurusan,penumpang,harga){
//     this.namaSupir = namaSupir;
//     this.jurusan = jurusan;
//     this.penumpang = penumpang;
//     this.harga = harga;

//     this.penumpangNaik = function(namaPenumpang){
//         this.penumpang.push(namaPenumpang);
//         return this.penumpang;
//     }

//     this.penumpangTurun = function(namaPenumpang,bayar){
//         if( this.penumpang.length === 0){
//             alert('Angkot Masih kosong');
//             return false;
//         }

//         for(var i=0; i< this.penumpang.length;i++){
//             if( this.penumpang[i] == namaPenumpang){
//                 this.penumpang[i] = undefined;
//                 this.harga += bayar;
//                 return this.penumpang;   
//             }
//         }
//     }
// }
// var angkot1 = new Angkot('Muammar Rizal',['Ciganjur','Cilandak'],[],0);
// var angkot2 = new Angkot('Jangs',['Ciganjur','Tanah baru'],[],0);

var nge ={
    nama : 'Muammar Rizal',
    lulus: true,
    ips:[3.38,2.49,3.71,3.46],
    ipk : function(ips){
        var total= 0;
        var hitung = this.ips;
        for(var i=0;i<hitung.length;i++){
            total += hitung[i];
        }
        return total/hitung.length;
    }
};

var saya ={
    nama: 'Muammar Rizal',
    umur: 18,
    pekerjaan: 'Mahasiswa',
    sapa: function(){
        return 'hi '+this.nama+' umur kamu berapa? '+this.umur+' pekerjaan Kamu apa ? '+this.pekerjaan;
    }
}

    
