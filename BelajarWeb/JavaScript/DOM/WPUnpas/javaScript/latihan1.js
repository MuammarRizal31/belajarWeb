//mengambil element didalam html
const html = document.getElementsByTagName('html')[0];
const container = document.getElementsByClassName('container')[0];

//menambahkan element didalam html
const button= document.createElement('button');
const textB= document.createTextNode('Dark mode');
button.appendChild(textB);
button.setAttribute('type','button')
container.append(button);

button.addEventListener('click',function(){
    html.style.backgroundColor='black';
    const p = document.createElement('h3');
    const text = document.createTextNode('YAHAHAHHAA GELAP CERAH BANGET YAH');
    p.appendChild(text);
    const a = document.querySelector('.container');
    a.appendChild(p);
    p.style.color='white';
    document.body.setAttribute('class','warna')
    const ambilBody = document.getElementsByClassName('warna')[0];
    ambilBody.style.backgroundColor='green';

    document.body.classList.toggle('warna');
})

const button2 = document.createElement('button');
const tButton = document.createTextNode('Random mode');
button2.append(tButton);
button.after(button2);
button2.addEventListener('click',function(){
    const r = Math.round(Math.random()*255 + 1);
    const g = Math.round(Math.random()*255 + 1);
    const a = Math.round(Math.random()*255 + 1);
    document.body.style.backgroundColor='rgb('+ r +','+g+','+a+')';
})

                                // slider
const slide = document.querySelector('input[name=red]');
slide.addEventListener('input',function(){
    const r = slide.value;
    const g = slide.value;
    const b = slide.value;
    document.body.style.backgroundColor=`rgb(${r},${g},100)`;
})
const slideG = document.querySelector('input[name=gree]');
slideG.addEventListener('input',function(){
    const r = slideG.value;
    const g = slideG.value;
    const b = slideG.value;
    document.body.style.backgroundColor='rgb(100,'+g+',100)';
})
const slideB = document.querySelector('input[name=blue]');
slideB.addEventListener('input',function(){
    const r = slideG.value;
    const g = slideG.value;
    const b = slideG.value;
    document.body.style.backgroundColor='rgb('+r+','+g+','+b+')';
})

document.body.addEventListener('mousemove',function(event){
    //posisi mouse
    //console.log(event.clientX)    
    //ukuran browser
    //console.log(window.innerWidth) //inner width adalah lebar dari document

    //ketika mouse digerakkan
    const xPos = Math.round((event.clientX/window.innerWidth)*255);
    //console.log(xPos);
    const yPos = Math.round((event.clientY/window.innerHeight)*255);
    //console.log(xPos);

    document.body.style.backgroundColor=`rgb(${xPos},${yPos},111)`;
})
