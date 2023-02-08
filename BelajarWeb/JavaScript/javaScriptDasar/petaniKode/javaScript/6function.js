//function adalah sub program yang bisa digunakan kembali baik didalam program itu sendiri maupun program yang lain
//dan parameter adalah variabel yang menyimpan nilai untuk di proses didalam fungsi

// 4 cara mebuat fungsi di javascript
//ada 4 cara yang bisa kita lakukan untuk membaut fungsi ja javascript
    //1.menggunakan cara biasa;
    //2.menggunakan ekspresi;
    //3.menggunakan tanda panah (`=>`)
    //4.menggunakan construktor

//membuat fungsi dengan cara biasa
function namaFungsi(){
    console.log('hello world');
}

//membuat fungsi dengan ekspresi
var namaFungsi2 = function(){
    console.log('Hello world');
}

//membuat fungsi dengan tanda panah
//cara ini sering digunakan dikode javascript masa kini,karena lebih sederhana
var namaFungsi3 = () => {
    console.log('Hello world');
}

//membuat fungsi dengan kostruktor
//cara ini sebenernya tidak di rekomendasian oleh developer mozilla,karena terlihat kurang bagus
var namaFungsi4 = new Function ('console.log("hello world!");');



        //memanggil fungsi melalui atribut event pada html
var panggilSay= () => alert('hello jange');

const bagi= (a,b) => {
    hasil = a / b;
    return hasil;
}

var nilai1 = 52;
var nilai2 = 2;
var hasilBagi = bagi(nilai1,nilai2);
document.write(`${hasilBagi}`);
document.write('<br><br>');

//pakai prompt
// const input = parseInt(prompt('Masukan nilai 1 : '));
// const input2 = parseInt(prompt('Masukan nilai 2 : '));
// const perkalian = (t,k) =>{
//     hasilkan = t * k;
//     return hasilkan;
// }
// document.write('hasilnya : '+perkalian(input,input2));


//data barang

var dataBarang =[
    "buku tulis",
    "pensil",
    "spidol"
];

function showBarang(){
    var listBarang = document.getElementById("listBarang")
    //clear list barang
    listBarang.innerHTML = "";

    //cetak semua barang
    for( let i=0; i<dataBarang.length; i++ ){
        var btnEdit = "<a href='#' onclick='editBarang("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='deleteBarang("+i+")'>Hapus</a>";

        listBarang.innerHTML += "<li>" + dataBarang[i] + " ["+btnEdit + " | "+ btnHapus +"]</li>";
    }
}

function addBarang(){
    var input = document.querySelector("input[name=barang]");
    dataBarang.push(input.value);
    showBarang();
}

function editBarang(id){
    var newBarang = prompt("Nama baru",dataBarang[id]);
    dataBarang[id] = newBarang;
    showBarang();
}

function deleteBarang(id){
    dataBarang.splice(id,1);
    showBarang();
}
showBarang();