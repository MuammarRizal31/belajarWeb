const button = document.createElement('button');
const text = document.createTextNode('Mode gelap');
button.append(text);
document.body.append(button);
button.setAttribute('id','tombol')
document.body.setAttribute('class','warna')
button.addEventListener('click',function(){
    // const clas = document.getElementsByClassName('warna');
    // body.style.backgroundColor="blue";
    document.body.classList.toggle('modeDark')
})

const button2 = document.createElement('button');
const text2 = document.createTextNode('Mode random');
button2.append(text2);
button.after(button2);

button2.addEventListener('click',function(){
    let r = Math.floor(Math.random()* 255 + 1)
    let g = Math.floor(Math.random()* 255 + 1)
    let b = Math.floor(Math.random()* 255 + 1)
    console.log(`${r} ${g} ${b}`)
    document.body.style.backgroundColor= `rgb(${r},${g},${b})`;
})

const sMerah = document.getElementsByName('sMerah')[0];
const sGreen = document.getElementsByName('sGreen')[0];
const sBlue = document.getElementsByName('sBlue')[0];
sMerah.addEventListener('input',()=>{
    const r = sMerah.value;
    const g = sGreen.value;
    const b = sBlue.value;
    console.log(r,g,b)
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`
    // document.body.style.backgroundColor=`rgb(0,${g},0)`
    // document.body.style.backgroundColor=`rgb(0,0,${b})`

})
sGreen.addEventListener('input',()=>{
    const r = sMerah.value;
    const g = sGreen.value;
    const b = sBlue.value;
    console.log(r,g,b)
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`
    // document.body.style.backgroundColor=`rgb(0,${g},0)`
    // document.body.style.backgroundColor=`rgb(0,0,${b})`

})
sBlue.addEventListener('input',()=>{
    const r = sMerah.value;
    const g = sGreen.value;
    const b = sBlue.value;
    console.log(r,g,b)
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`
    // document.body.style.backgroundColor=`rgb(0,${g},0)`
    // document.body.style.backgroundColor=`rgb(0,0,${b})`

})
button.style.display= 'block'
button.style.margin='auto'
const wasit = document.querySelector('.wasit img')
document.addEventListener('mousemove',function(e){
    console.log(e.clientY)
    const xPos = Math.floor((e.clientX / window.innerWidth)*255);
    const yPos = Math.floor((e.clientY / window.innerHeight)*255);
    document.body.style.backgroundColor=`rgb(${xPos},${yPos},0)`
    // console.log(xPos,yPos)

});
