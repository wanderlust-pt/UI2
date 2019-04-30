// Up arrow
window.onscroll = function() { scroll() };

function scroll() {
    if (document.body.scrollTop > 50) {
        document.getElementById("btn").style.display = "block"
    } else {
        document.getElementById("btn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}