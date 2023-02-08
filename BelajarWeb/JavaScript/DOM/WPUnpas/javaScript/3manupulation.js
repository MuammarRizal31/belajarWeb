//MANIPULATION element
//-element.innerHTML        --> property yang digunakan untuk memperoleh atau merubah konten dari elemen itu sendiri
//-element.style.<PROPERTY>
//-element.setAttribute()
    //-element.getAttribute();      -->untuk mengambil ada atribute apa saja di dalam nya
    //-element.setAttribute();      -->untuk mengubah attribute didalam nya
    //-element.removeAttribute();   -->untuk menghapus attribute nya
//-element.classList -->untuk mengelola class/untuk menambah class baru
    //-element.classList.add()      -->untuk menambahkan class baru
    //-element.classList.togle()    -->jika sebuah element tidak punya class maka dia akan menambahkan,jika dia sudah punya class maka dia akan menghilangkan
    //-element.classList.remove()   -->untuk menghapus class
    //-element.classList.item()     -->untuk mengetahui nama class nya
    //-element.classList.contains() -->mengecek class disebuah element
    //-element.classList.replace()  -->untuk mengganti nama class nya



                    //PRAKTEK NYA

//set innerHTML and property
    const h1 = document.getElementsByClassName('jangs');
    h1[0].innerHTML='<em>muammar rizal</em>';

    const judul = document.querySelector('.jangs');
    judul.style.color= 'red';
    judul.style.backgroundColor= 'salmon';
    judul.style.textAlign='center';

//set attribute
    const rizal = document.getElementsByTagName('h1')[0];
    rizal.setAttribute('name','MuammarRizal');

    const a = document.querySelector('#content1  a')
    a.setAttribute('link','jangs');
    a.getAttribute('link');

//ELEMEN CLASS.LIST
const p2= document.querySelector('.p2');
//coba di console    
    // p2 = classList;
    // p2 = classList.add('label');
    // p2 = classList.remove('label');
    // p2 = classList.toogle('jangs'); -->dia akan mengecek dahulu ada class bernama jangs didalama atau tidak,jika tidak ada akan ditambahkan
    //                                  -jika ada maka akan di hapus
    // p2 = classList.item('2');
    // p2 = classList.replace('jange','rizal');