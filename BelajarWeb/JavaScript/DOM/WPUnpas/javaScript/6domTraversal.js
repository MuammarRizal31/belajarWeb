//      DOM TRAVERSAL METHOD
//-parentNode               ||NODE
//-parentElement            ||element
//-nextSibling              ||NODE
//-nextElementSibling       ||element
//-previousSibling          ||node
//-previousElementSibling   ||element

const nama = document.querySelector('.nama');
console.log(nama.parentElement) //class card
console.log(nama.parentNode)


//DOM HANDLING
// const close = document.querySelector('.close')
// const card = document.querySelector('.card')
// close.addEventListener('click',function(){
//     card.style.display="none";
// })

//DOM TRAVERSAL
const close1 = document.querySelectorAll('.close');
// for(let i=0;i<close1.length; i++){
//     close1[i].addEventListener('click',function (e){
//         // close1[i].parentElement.style.display="none"  //clik ini dah telusuri siapa orang tuanya{parent}
//         e.target.parentElement.style.display="none";
//     })
// }

//cara lebih praktis nya
close1.forEach(function(el){        //lebih simple karena tidak perlu makai let i = 1 dan seterusnnya
    el.addEventListener('click',function(e){
        e.target.parentElement.style.display='none';
    })
})