function pilihanComputer(){
    const comp = Math.random();
    if(comp < 0.34) return 'gajah'
    if(comp >= 0.34 && comp < 0.67)return 'orang'
    return 'semut'
}

function getHasil(comp,player){
    if (player == comp) return "Seri";
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH'
    if (player == 'orang') return (comp == 'semut')? 'MENANG' : 'KALAH';
    if (player == 'semut') return (comp == 'gajah') ? 'MENANG' : 'KALAH';
}

const pSemut = document.querySelector('.semut');
pSemut.addEventListener('click',function(){
    const computerMemilih = pilihanComputer();
    pilihanPlayer = pSemut.className;
    const hasil = getHasil(computerMemilih,pilihanPlayer);
    
    const ganti = document.getElementsByClassName('wasit')[0];
    ganti.setAttribute('src',`../image/${computerMemilih}.jpg`)
    console.log(hasil)
    
    const info = document.getElementsByClassName('info')[0];
    info.innerHTML = hasil;
})

function putar(){
    const gambar =['gajah','semut','orang']
    const imgComputer = document.querySelector('.wasit');
    let i =0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src',`../image/${gambar[i++]}.jpg`)
        if (i == gambar.length){i = 0;}
    },100)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
     pil.addEventListener('click',function(){ //dia akan mengambil gambar yang hanya di klick saja
        const computerMemilih = pilihanComputer();
        pilihanPlayer = pil.className;
        const hasil = getHasil(computerMemilih,pilihanPlayer);

        putar();

        setTimeout(function(){
            const ganti = document.getElementsByClassName('wasit')[0];
            ganti.setAttribute('src',`../image/${computerMemilih}.jpg`)
            console.log(hasil)
                    
            const info = document.getElementsByClassName('info')[0];
            info.innerHTML = hasil;

        },1000)
                
    }) 
});














//cara mudah nya

// const porang = document.querySelector('.orang');
// porang.addEventListener('click',function(){
//     const computerMemilih = pilihanComputer();
//     pilihanPlayer = porang.className;
//     const hasil = getHasil(computerMemilih,pilihanPlayer);
    
//     const ganti = document.getElementsByClassName('wasit')[0];
//     ganti.setAttribute('src',`../image/${computerMemilih}.jpg`)
//     console.log(hasil)
    
//     const info = document.getElementsByClassName('info')[0];
//     info.innerHTML = hasil;
// })

// const pgajah = document.querySelector('.gajah');
// pgajah.addEventListener('click',function(){
//     const computerMemilih = pilihanComputer();
//     pilihanPlayer = pgajah.className;
//     const hasil = getHasil(computerMemilih,pilihanPlayer);
    
//     const ganti = document.getElementsByClassName('wasit')[0];
//     ganti.setAttribute('src',`../image/${computerMemilih}.jpg`)
//     console.log(hasil)
    
//     const info = document.getElementsByClassName('info')[0];
//     info.innerHTML = hasil;
// })