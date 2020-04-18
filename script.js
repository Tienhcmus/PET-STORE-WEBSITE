let header = document.querySelector('.menu');
let origOffsetY = header.offsetTop;

function onScroll(e) {
    window.scrollY >= origOffsetY ? header.classList.add('sticky') :
        header.classList.remove('sticky');
};