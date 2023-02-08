//akan eror karna tidak dipanggil pemberhentian nya
// function jange(n){
//     console.log(n);
//     return jange(n-1)
// }

// jange(5);

        //base case
    //kondisi akhir dari rekursi yang menghasilkan nilai

function jange(n){
    if(n === 0){
        return;
    }
    console.log(n);
    jange(n-1);
}

jange(19);

function faktorial(n){
    if( n === 0) return 1;
    return n * faktorial(n-1);
}

console.log(faktorial(5));

//implementasi rekursif
// -menggantikan looping
// -melakukan derecti bonacci
// -pencarian dan penelusuran pda struktur data list dan Tree
