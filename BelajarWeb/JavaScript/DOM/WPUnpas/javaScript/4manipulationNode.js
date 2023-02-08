//memungkin kan kita bisa menambah node baru
//-contohnya
    //-menambahkan element baru pada dom
    //-mengubah dan menghapus element pada dom

//method-method pada manipulation node <!--INI METHOD LAMA-->
    //-document.createElement()     -->untuk membuat element baru pada HTML
    //-document.createTextNode()    -->untuk membuat text baru pada element
    //-node.appendChild()           -->ingin taro dimana element nya/isinya
    //-node.insertBefore()          -->bagian sebelum diselector/dipilih
    //-parentNode.removeChild()     -->menghapus element
    //-parentNode.replaceChild()    -->mengganti atau mengubah element

//               <!-- INI METHOD BARU -->
    //-parentNode.append();      -->menambahkan element diakhir dari sebuah parent
    //-parentNode.prepend()      -->menambahkan element diawal dari sebuah parent
    //-parentNode.before()       -->bagian sebelum diselector/dipilih
    //-parentNode.after()        -->bagian sesudah diselector/dipilih
    //-parentNode.remove()       -->menghapus element
    //-parentNode.replaceWith()  -->mengubah/mengganti element
    
    //CONTOH PENGGUNAAN NYA

//CREATE ELEMENT,CREATE TEXT NODE,APPEND CHILD
//buat element baru
    const eBaru = document.createElement('p');
    const tBaru = document.createTextNode('Paragraph baru');

//simpan tulisan ke dalam paragraph
eBaru.appendChild(tBaru);

//simpan paragraph kedalam content1
const content1 = document.getElementById('content1');
content1.appendChild(eBaru);
eBaru.style.backgroundColor = 'grey';

//      ------->>
//INSERT BEFORE
//membuat item baru
const liBaru = document.createElement('li');
const namaLi = document.createTextNode('Element baru');

//simpan text yang dibuat diatas kedalam list(li)
liBaru.appendChild(namaLi);

//simpan list yang baru dibuat diatas kedalam UL
const ul = document.querySelector('div#content2 ul');
const cariLi = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru,cariLi);
liBaru.style.backgroundColor = 'grey';

//      --------->>
//REMOVE CHILD
//menghapus link a pada HTML
const link = content1.getElementsByTagName('a')[0];
content1.removeChild(link);

//      ---------->>
//REPLACE CHILD
//mengganti H1
const ambilBody = document.getElementById('heading');
const ambilH1 = ambilBody.getElementsByClassName('jangs')[0];

const buatJudul = document.createElement('h2');
const buatText = document.createTextNode('judul baru');
buatJudul.appendChild(buatText);
ambilBody.replaceChild(buatJudul,ambilH1);
buatJudul.style.backgroundColor='grey';