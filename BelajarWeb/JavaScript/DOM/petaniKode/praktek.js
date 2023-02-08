// const jange = document.getElementsByClassName("jange")[2];
// jange.style.color="blue"

const nge = document.getElementsByClassName("jange");
setInterval(function(){
    nge[0].style.color="green";
    nge[1].style.color="yeelow";
    nge[2].style.color="red";

    setTimeOut(function (){
        nge[0].style.color="black";
        nge[1].style.color="black";
        nge[2].style.color="black";
    },500)
},1000)
