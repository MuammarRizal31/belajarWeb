//domSelection
//array tidak bisa langsung dimodifikasi(getElementsByTagName)
//yang bisa diubah hanya element saja

// getElementById() --> mengembalikan element
const heading = document.getElementById('heading');
heading.style.color = 'green';
heading.style.backgroundColor = 'blue';
heading.innerHTML ='HELLO JANGS'
heading.style.fontSize = '35px';
heading.style.fontWeight='bold';

//document.getElementsByTagName() --> mengembalikan HTML collection
const nge = document.getElementsByTagName('p');
for(let i=0; i<nge.length; i++){
    nge[i].style.backgroundColor= 'red';
}

const tr = document.getElementsByTagName('p')[2];
tr.style.fontSize= ('81px');

//document.elementsByClassName() --> HTML collection;
const njge = document.getElementsByClassName('p2')[0];
njge.innerHTML ='ini diubah dari javascript';

//document.querySelector() --> menghasilkan element
const p4 = document.querySelector('#content2 ul li:nth-child(2)');
p4.style.color= 'green';
p4.style.fontSize= '22px';
p4.style.backgroundColor= 'black';

//document.querySelectorAll() --> menghasilkan semua elements
const jange = document.querySelectorAll('li');
for( let i =0; i<jange.length; i++ ){
    jange[i].style.backgroundColor = 'black';
    jange[i].style.color= 'green';
}
jange[1].style.color= 'grey';

//MENGUBAH NODE ROOT(MENGUBAH DOCUMENT)
const ubah = document.getElementById('content2');
const ubah2 = ubah.querySelector('p');
ubah2.style.color= 'green';
ubah2.style.fontSize= '22px';
ubah2.style.fontWeight=('bold');