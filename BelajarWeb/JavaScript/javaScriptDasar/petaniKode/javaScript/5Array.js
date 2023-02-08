// const product = ['bako','garpu','sendal'];
// document.write(`<h1> NAMA PRODUCT </H1>`);
// document.write('<ul>')

// for(let i=0;i<product.length; i++){
//     document.write(`<li>${product[i]}</li>`)
// }
// document.write('</ul>');

// document.write('Menggunakan for each');

// const Jange = function(nama,penumpang,bayar){
//     this.nama = nama;
//     this.penumpang = penumpang;
//     this.bayar = bayar;

//     this.penumpangNaik = function(naik,penumpang){
//         if(this.penumpang.length === 0){
//             this.penumpang.push(naik);
//             return this.penumpang;
//         }else{
//             for( let i=0;i<this.penumpang.length;i++){
//                 if(this.penumpang[i] == undefined){
//                     this.penumpang.push(naik);
//                     return this.penumpang;
//                 }else if( i == this.penumpang.length-1 ){
//                     this.penumpang.push()
//                     return this.penumpang;
//                 }
//             }
//         }
//     }
// }

// let angkot1 = new Jange('MuammarRizal',[],0);
// let angkot2 = new Jange('jange',[],0);


const rizal = [];
for ( let i=0;i<15;i++){
    document.write(`<p>perulangan ke : ${i+1}</p>`)
}

// const bulat = parseInt(prompt('Masukan angka : '));
// alert('Angka yang anda masukan adalah : '+bulat);
// if (bulat % 2 === 0){
//     alert('hasil bulat');
// }else{
//     alert('hasil ganjil')
// }