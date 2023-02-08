// var penumpang = ['ijang','ijal','jangse','topet'];
// var cas = 0;
// var supir1 ={
//     nama: 'MuammarRizal',
//     harga : 4000,
//     trayek : 'Ciganjur-cilandak'
// }
// var supir2 =['Jange',5000,'Ampera-kemang'];

// //penumpang naik
// var supir1 = function(penumpangNaik,penumpang){
//     if (penumpang.length == 0){
//         penumpang.push(penumpangNaik);
//         return penumpang;
//     }else{
//         for( i=0;i<penumpang.length; i++ ){
//             if( penumpang[i] == penumpangNaik){
//                 console.log('Maaf nama tidak boleh sama');
//             }else if(penumpang[i] == undefined){
//                 penumpang.push(penumpangNaik);
//                 return penumpang;
//             }
//             else if([i] == penumpang.length-1){
//                 penumpang.push(penumpangNaik);
//                 return penumpang;
//             }
//         }
//     }
// }

// var supir2 = function(penumpangTurun,bayar,penumpang){
//     for(i=0; i<penumpang.length; i++){
//         if(penumpang[i] == penumpangTurun){
//             penumpang.splice(penumpangTurun);
//             return penumpang;
//         }
//     }
// }


        //MEMBUAT OBJECT
function Angkot(supir,jurusan,penumpang,kas){
    this.supir = supir;
    this.jurusan = jurusan;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        if(this.penumpang.length === 0){
            this.penumpang.push(namaPenumpang);
            return this.penumpang;
        }else{
            for(var i=0;i<this.penumpang.length;i++){
                if (penumpang[i] == undefined){
                    this.penumpang[i] = namaPenumpang;
                }else if([i] == this.penumpang.length-1){
                    this.penumpang.push(namaPenumpang)
                    return this.penumpang;
                }
            }
        }
    }
    this.penumpangTurun = function(namaPenumpang,bayar){
        if(this.penumpang.length === 0){
            alert('angkot masih kosong');
            return false;
        }
        for(var i=0;i<this.penumpang.length;i++){
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                console.info('Anda membayar : '+this.kas);
                return this.penumpang;
            }
        }
    }
}
var angkot1 = new Angkot('MuammarRizal',['malang','cibodas'],[],0);
var angkot2 = new Angkot('jangsee',['cilandak','ciganjur'],[],0);