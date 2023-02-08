//      19testModule.js
export let arr = ["Jange","ijal","rizal","jangs"];

//      21Data.js
export let mhs = {
    nama: "Muammar rizal",
    lahir: "Jakarta",
    pendidikan: "Universitas"
}

export let jange = "Muammar Jange";
let cnsl = console.log("Selamat kamu berhasil");
//export {arr,mhs,jange};   //Bisa juga seperti ini

export {cnsl};

//      22exportImportAS.js
let mhs2 = {
    nama: "Rizal",
    jurusan: "Informatika",
    sayHello : (inputNama) => {
        return alert(`Hello ${inputNama}`);
    }
}

let namaMhs2 = "Jange";
export {mhs2 as mahasiswa,namaMhs2 as nmMhs};

const nama = {
    mahasiswa1 : "Jange",
    mahasiswa2 : "Rizal",
    mahasiswa3 : "Ijang"
}
const kalkulator = {
    pertambahan : (nilai1,nilai2) => {
    return nilai1 + nilai2;
    },
    perkurangan : (nilai1,nilai2) => {
        return nilai1 + nilai2;
    },
    pembagian   : (nilai1,nilai2) => {
        return nilai1 + nilai2;
    },
    perkalian   : (nilai1,nilai2) => {
        return nilai1 + nilai2;
    }
}

export {nama,kalkulator};

//      23exportDefault.js
const panggil = (nama) => {
    return `Nama saya adalah ${nama}`;
}

export default panggil;