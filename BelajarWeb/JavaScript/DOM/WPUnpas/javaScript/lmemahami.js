//inner HTML untuk mengubah isi dari html
const ambilH1 = document.getElementsByClassName('belajar')[0];
const container = document.getElementById('container');
const content = document.querySelector('.content');
const p = document.querySelectorAll('.content p');
const button = document.querySelector('button');
const body = document.body;

//UNTUK MENGUBAH TAMPILAN
ambilH1.innerHTML = "Belajar JavaScript bersama jangs";
ambilH1.style.backgroundColor= 'salmon';
container.style.margin='15px auto';
container.style.padding= '10px';
container.style.textAlign='center';
container.style.border = '2px solid black';
content.style.margin= 'auto';
content.style.border= '2px solid black';
content.style.width='800px';
content.style.padding = '15px';

//manipulation
console.log(container.getAttribute('id'));
console.log(content.getAttribute('class'))
content.setAttribute('class','jange') //mengubah class content menjadi jange
content.classList.add('rizal') //menambahkan class rizal di element div content
content.classList.remove('class','rizal') //menghapus attribute rizal didalam class content
content.setAttribute('name','jange'); //menambahkan attribute name didalam content
content.removeAttribute('name') //menghapus attribute name didalam content;
button.classList.toggle('class','ganti-lampu')

button.addEventListener('click',function(){
    body.classList.toggle('lampu')
})

//manipulation2
const pBaru = document.createElement('p');
const tBaru = document.createTextNode('paragraph baru');
pBaru.append(tBaru);
content.append(pBaru);

const pBaru2 = document.createElement('a');
const tBaru2 = document.createTextNode('Masuk ke halaman instagram');
pBaru2.append(tBaru2);
content.append(pBaru2);

pBaru2.setAttribute('href','https://www.instagram.com/mmr_rizal');

const baruLagi = document.createElement('p');
const textLagi = document.createTextNode('jange nich');
baruLagi.append(textLagi);

const p2 = document.querySelector('.jange2');
p2.before(baruLagi)

const masukan = document.createElement('ul');
const masukan2 = document.createElement('li');
const masukan3 = document.createTextNode('element1');
masukan.append(masukan2);
masukan2.append(masukan3);
masukan.append(masukan2);
content.append(masukan);

button.addEventListener('click',function(){
    const jange = document.createElement('li');
    const jange1 = document.createTextNode('jangejange');
    jange.append(jange1);
    masukan.append(jange);
    content.append(masukan);
})

const broh = document.createElement('h2')
const text = document.createTextNode('HAI MY NAME JANGE')
broh.appendChild(text);
p2.replaceWith(broh)

//event
const paragraphBaru = document.createElement('h2');
const textD = document.createTextNode('Haii semua');
paragraphBaru.append(textD);
content.append(paragraphBaru);
content.addEventListener('click',function(){
    paragraphBaru.style.backgroundColor='red';
})

const ulB = document.getElementsByTagName('ul')[0]
ulB.setAttribute('class','lama')

ulB.addEventListener('mouseenter',function(){
    const listLagi = document.createElement('li');
    const textLagilagi = document.createTextNode('List baru');
    listLagi.append(textLagilagi);
    ulB.append(listLagi);
    
})
