const jumbo = document.querySelector('.jumbo');
const container = document.querySelector('.container');

container.addEventListener('click',function(pencet){
    if( pencet.target.className == 'image' ){
        jumbo.src= pencet.target.src;
    }
})