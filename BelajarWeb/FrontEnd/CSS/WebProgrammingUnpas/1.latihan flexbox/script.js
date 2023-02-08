const slide = document.querySelector('.menu-toggle');
slide.addEventListener('click',() => {
    const ul = document.querySelector('ul')
    ul.classList.toggle("slide");
})