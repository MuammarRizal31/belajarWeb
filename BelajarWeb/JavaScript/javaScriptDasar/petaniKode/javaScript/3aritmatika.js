var a =15;
var b =25;
var c;

document.write('OPERATOR ARITMATIKA'+'<br>');
//pengurangan
c = b - a;
document.write(`${b} - ${a} = ${c}<br/>`);

//penambahan
c = b + a;
document.write(`${b} + ${a} = ${c}</br>`)

//perkalian
c = b * a;
document.write(`${b} * ${a} = ${c}<br>`);

//pembagian
c = b / a;
document.write(`${b} / ${a} = ${c}<br>`);

//pemangkatan
c = b ** a;
document.write(`${b} ** ${a} = ${c}<br>`);      

//sisa bagi
c = b % a;
document.write(`${b} % ${a} = ${c}<br><br>`);

        //penugasan
document.write('OPERATOR PENUGASAN'+'<br>')
var z = 5;

//penambahan
z+= 10;
document.write('Score sekarang adalah : '+z+'<br>');

z -=5;
document.write('Score sekarang berkurang lagi : '+z+'<br>');

z *= 2;
document.write('Score sekarang dikali : '+z+'<br>');

z **=2;
document.write('Score sekarang di pangkatin dua : '+z+'<br>');

z %=2;
document.write('Score sekarang di sisa bagiin dua : '+z+'<br><br>');

        //OPERATOR PERBANDINGAN
var aku = 2;
var kamu =1;
document.write('OPERATOR PERBANDINGAN'+'<br>')
document.write('nilai dari aku : '+aku+'<br>');
document.write('nilai dari kamu : '+kamu+'<br>');

var hasil = aku >= kamu;
document.write('Apakah aku lebih besar dari kamu ? ' +hasil+'<br>');

var hasil = aku <= kamu;
document.write('Apakah aku lebih kecil dari kamu ? '+hasil+'<br>');

var hasil = aku == kamu;
document.write('Apakah aku sama dengan kamu ? ' +hasil+'<br>');

var hasil = aku != kamu;
document.write('Apakah aku tidak sama dengan kamu ? '+hasil+'<br>'+'<br>');


document.write('OPERATOR LOGIKA'+'<br>')
var mu = 2;
var ku = 4;
var hasil;

benar = mu < ku;
salah = mu > ku;

hasil = benar && salah;
document.write(`${salah} && ${benar} = ${hasil}`+'<br>');

hasil = benar || salah;
document.write(`${salah} || ${benar} = ${hasil}`+'<br>');

hasil = !salah;
document.write(`!${salah} = ${hasil}`+'<br>'+'<br>');

document.write('OPERATOR BITWISE');
//OPERATOR BITWISE MERUPAKAN OPERATOR YANG DIGUNAKAN UNTUK OPERASI BERDASARKAN BILANGAN BINNER/BIT

//      NAMA                  ||              SIMBOL
//      AND                   ||                &
//       ||                   ||                OR
//      XOR                   ||                ^
// NEGASI/KEBALIKAN           ||                ~
//   LEFT SHIFT               ||                <<
//   RIGHT SHIFT              ||                >>
//   LEFT SHIFT(UNSIGNED}     ||                <<<
//   RIGHT SHIFT(UNSIGNED}    ||                >>>
        //OPERATOR INI AKAN MENGHITUNG DARI BIT KE BIT

//OPERATOR TERNARY
document.write('OPERATOR TERNARY'+'<br>');
var pertanyaan = confirm('Apakah kamu suka aku ? ');
var hasil = pertanyaan ? 'Selamat datang' : 'Cabut aja sono';

document.write(hasil);  