
var sButton = document.getElementById('scroll');

window.onscroll = function () {
    if (window.pageYOffset >= 450) {
        sButton.style.display = "block";
    } else {
        sButton.style.display = "none";
    }
}


sButton.onclick = function () {
    window.scrollTo(0, 0);
}
