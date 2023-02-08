//event pada javascript memperensentasikan sebuah kejadian yang terjadi didalam dom
//cara menggunakan event
    //-event handler
    //-inline html attribute
    //element method
//DAFTAR EVENT YANG PALING SERING DIPAKAI
    //-MOUSE EVENT -->INI BERFUNGSI KETIKA MOUSE NYA DI click/doubleClick/digeser pointer nya/atau digerakkan
        //-click        -->ketika di klick
        //-dblclick     -->ketika didouble klick
        //-mouserHover  -->ketika kursor mouse berada di atas nya
        //-mouseEnter 
        //-mouseLeave
        //-mouseUp
        //-wheel
    //-KEYBOARD EVENT -->ketika keyboard nya di tekan/dilepas 
        //-keyDown
        //-keyPress
        //-keyUp
    //-RESOURCES EVENT -->ketika halaman nya di load jadi kita bisa mengetahui apakah koneknya lambat atau cepat
    //-FOKUS EVENT -->ini penting ketika bikin form ketika text di klik dia masuk kedalam fokus
    //-VIEW EVENT
        //-resize
        //-scroll
    //-FORM EVENT
        //-reset
        //-submit
    //-CSS ANIMATION DAN TRANSITION EVENT
    //-DRAG & DROP EVENT
    //-DLL
//-addEventListener()


//---------->>> onclick
const p3 = document.getElementsByClassName('p3')[0];
function ubahWarna(){
    p2.style.backgroundColor ='grey';
}
function ubahWarna2(){
    p3.style.backgroundColor ='green';
}
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna;
p3.onclick = ubahWarna2;


//----------->>> addEventListener();
const p4 = document.querySelector('#content2 p');
p4.addEventListener('click',function(){
    const ambilUl = document.querySelector('#content2 ul');
    const liBaru = document.createElement('li');
    const textBaru = document.createTextNode('list baru dibuat');
    liBaru.append(textBaru);
    ambilUl.append(liBaru) ;
});


    //perbedaan dari events handles dan event listener

//---------->> event handler
const p1 = document.getElementsByTagName('p')[0];
p1.onclick = function(){
    p1.style.color='red';
}
p1.onclick = function(){
    p1.style.backgroundColor='red';
}
//------>>DIA HANYA MENGABIL SATU NILAI SAJA YANG PALING AKHIR CONTOH DIATAS SEPERTI BACKGROUND

//------>> EVENT LISTENER
const ubahB = document.querySelector('#content2 li:nth-child(2)');
ubahB.addEventListener('click',function(){
    ubahB.style.backgroundColor='grey';
})
ubahB.addEventListener('click',function(){
    ubahB.style.color='green';
    ubahB.style.fontSize= '45px';
})
//-------->> dia mengambil semua nilai yang sudah dibuat tidak seperti event handler





