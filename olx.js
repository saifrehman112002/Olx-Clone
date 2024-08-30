// Get the button
var backToTopBtn = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 1150 || document.documentElement.scrollTop > 1150) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll back to the top of the document
backToTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
