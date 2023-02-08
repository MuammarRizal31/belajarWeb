//Ini contoh dari export as...contoh nya ada pada moduleSemua.js
import {mahasiswa,nmMhs} from "./1moduleSemua.js";
document.body.innerHTML =nmMhs;
mahasiswa.sayHello(nmMhs);

//contoh dari import as
import {nama as nm,kalkulator as calcu} from "./1moduleSemua.js";
console.log(calcu.perkalian(2,9));
console.log(calcu.pembagian(9,3));
console.log(`Nama panggilan saya dikaisin : ${nm.mahasiswa2}`);