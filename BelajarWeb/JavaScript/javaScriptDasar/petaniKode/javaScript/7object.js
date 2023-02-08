//object adalah sebuah variabel yang menyimpan nilai (properti) dan fungsi method
//properti adalah ciri khas dari objek (variabel).sedangkan method adalah prilaku dari objek (fungsi);
//kata kunci this digunakan untuk mengakses properti dan method dari dalam object(objek)
var car = {
    //properti
    nama : 'avanza',
    type : '31',
    warna : 'blue',

    //method
    start: function(){
        console.log('ini adalah method start');
    },

    drive: function(){
        console.log('ini adalah method drive');
    },

    brake: function(){
        console.log('ini adalah method brake');
    },

    stop: function(){
        console.log('ini adalah method stop');
    }
}

//cara mengakses properti dan method
console.log(car.nama);
console.log(car.warna);

//mengakses method
car.start();
car.drive();

//latihan this
var person ={
    firstName: 'muammar',
    lastName: 'rizal',
    showName: function(){
        alert(`Nama pertama anda : ${this.firstName} dan nama terakhir anda : ${this.lastName}`)
    }
}
person.showName();

var person2 ={
    firstName: 'jangse',
    lastName: 'ma brow',
    tampilkan: function(){
        alert(`nama pertama anda : ${this.firstName} dan nama terakhir anda : ${this.lastName}`)
    }
}

person2.tampilkan();

//javascript menggunakan class

function personLagi(masukan,masukan2){
    //properti
    this.namaPertama = masukan;
    this.namaKedua = masukan2;

    //method
    this.namaLengkap = function(){
        return `${this.namaPertama} ${this.namaKedua}`;
    }

    this.showName = function(){
        document.write('nama lengkap ada adalah : '+this.namaLengkap())
    }

}

var yo = new personLagi('jangs','muamar');
var ya = new personLagi('rizal','jange');

yo.showName();
document.write('<br>')
ya.showName();

alert(yo.namaLengkap());