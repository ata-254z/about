function buka() {
    document.getElementById("info").style.display="block";
}
function tutup() {
    document.getElementById("info").style.display="none";
}
function side() {
    document.querySelector('.aside').style.visibility= "visible";
}
function cside() {
    document.querySelector('.aside').style.visibility= "hidden";
}
window.addEventListener('scroll', function() {
    window.scrollTo(0, window.scrollY);
});
function scrollPageDown() {
    window.scrollTo(0, 581);
}