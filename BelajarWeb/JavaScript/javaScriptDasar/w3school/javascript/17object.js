//membuat object
//object literal
var mhs = {
    nama: 'Muammar rizal',
    umur: 20,
    jurusan: 'Tehknik informatika'
}

//function declaration
function namaMhs(nama,umur,jurusan){
    var masukan ={};
    masukan.nama = nama;
    masukan.umur = umur;
    masukan.jurusan = jurusan;
    return masukan;
}

var mahasiswa3 = namaMhs('MuammarRizal',31,'informatika');

//function construktor
//ini tidak perlu memakai return
function Kange(nama,umur,jurusan){
    this.nama = nama;
    this.umur = umur;
    this.jurusan = jurusan;
}

var kk = new Kange('Muammar Rizal','22','Informatika');


var mahasiswa ={
    nama : 'Muammar Rizal',
    lulus : true,
    IPsemester : [2.91,3.11,3.22,2.88,3.12],
    alamat : {
        kota : 'jakarta',
        anakPertama: false,
        provinsi: 'ibu kota jakarta'
    },
    IPKumulatif : function(){
        var total = 0;
        var ips = this.IPsemester;
        for(var i=0; i<this.IPsemester.length;i++){
            total += ips[i];
        }
        return total/ips.length;
    }
}

console.log(mahasiswa.IPKumulatif());

var jange=['rizal',18,[3.12,1.99,2.91]];
function ange(input){
    var total =0;
    for(i=0;i<input.length;i++){
        total += input[i];
    }
    return total/input.length;
}
console.log(ange(jange[2]));

var kl ={
    nama: 'Muammar Rizal',
    lahir: 'jakarta',
    umur : 18,
    bro : function(){
        return 'nama anda siapa ? '+this.nama+' anda lahir dimana ? '+this.lahir+' Anda umur berapa ? '+this.umur;
    }
}

console.log(kl.bro())
console.log('Menambahkan data')
console.log(this.kl)
console.log(kl.panggil= 'jange');
console.log(this.kl)
console.log(' ');

console.log('logika')
var ngenge ={
    nama : "nama saya adalah rizal",
    lahir: 'saya lahir dijakarta',
    ips : [3.21,3.22,1.22],
    alamat : {
        jl: 'kaisin',
        rt : '04/004',
        panggilan : 'jange'
    }
}
console.log(ngenge.nama)
console.log(ngenge.ips[2]);
console.log(ngenge.alamat.rt)
console.log(ngenge.alamat["panggilan"])
