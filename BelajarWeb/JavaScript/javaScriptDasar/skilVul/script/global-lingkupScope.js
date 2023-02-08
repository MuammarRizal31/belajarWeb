//lingkup global adalah sebuah variable yang bisa diakses dimana saja,baik didalam maupun diluar suatu fungsi atau blok(grup) kode.

/*
    //lingkup lokal bisa dibagi lagi menjadi dua tipe
        -lingkung fungsi(function scope)
        -lingkup block (block scope)
*/
//contoh
const olahraga ='baseket ball';
function namaAtlet(){
    let atlet = 'rizal';    //lingkup fungsi
    const noRizal = 10;     //lingkup fungsi
    console.log(olahraga); //output baseket ball
    if (olahraga === 'baseket ball'){
        atlet = 'jange aja';
        const noJange = 25;     //lingkup block
        console.log(olahraga); //output baseket ball
    }
    return atlet;
}

console.log(namaAtlet());

let carName ='kijang';
function gantiNama(){
    let carName = 'jange';
    return carName;
}

alert(gantiNama());