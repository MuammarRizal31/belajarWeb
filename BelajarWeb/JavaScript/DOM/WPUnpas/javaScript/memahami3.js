let pilihanComp = () =>{
    const comp = Math.floor(Math.random()*90 + 1)
    if ( comp >= 60 && comp <= 90){return "gajah";}
    else if ( comp >= 30 && comp < 60){return "orang";}
    else{return "semut";}
}
let hasil = (player,comp) =>{
    if(player == comp){return "SERI"}
    else if(player == "gajah") return comp == "semut" ? "LOSE" : "WIN";
    else if(player == "orang") return comp == "gajah" ? "LOSE" : "WIN";
    else if(player == "semut") return comp == "orang" ? "LOSE" : "WIN";
}


const compHasil = [];
const playerHasil = [];
const player1 = document.querySelector('.hasil .player p');
const computer = document.querySelector('.hasil .computer');
const pPlayer = document.querySelectorAll('.player img')
const wasit = document.querySelector('.wasit img');
pPlayer.forEach(function(e){
    e.addEventListener('click',function(el){
        const info = document.querySelector('.info');
            const comp = pilihanComp();
            const player = e.className;
            const hasil2 = hasil(player,comp)
            console.log(comp,player)
            info.innerHTML = hasil2; 

            wasit.setAttribute('src',`../image/${comp}.jpg`)
                if ( hasil2 == 'WIN' ){
                    playerHasil.push('I');
                    player1.after(playerHasil,player1);
                }else if( hasil2 == 'LOSE' ){
                    compHasil.push('I');
                    console.log('comp : '+compHasil);
                }else{
                    alert('hasil seri')
                }
    })
})
// const pGajah = document.getElementsByClassName('gajah')[0];
// pGajah.addEventListener('click',function(){
//     const info = document.querySelector('.info');
//     const comp = pilihanComp();
//     const player = pGajah.className;
//     const hasil2 = hasil(player,comp)
//     info.innerHTML = hasil2;
// });
// const pSemut = document.getElementsByClassName('semut')[0];
// pSemut.addEventListener('click',function(){
//     const info = document.querySelector('.info');
//     const comp = pilihanComp();
//     const player = pSemut.className;
//     const hasil2 = hasil(player,comp)
//     info.innerHTML = hasil2;
// });
// const pOrang = document.getElementsByClassName('orang')[0];
// pOrang.addEventListener('click',function(){
//     const info = document.querySelector('.info');
//     const comp = pilihanComp();
//     const player = pOrang.className;
//     const hasil2 = hasil(player,comp)
//     info.innerHTML = hasil2;
// });

