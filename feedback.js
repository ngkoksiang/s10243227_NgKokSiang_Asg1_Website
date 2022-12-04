// Get the pop up
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the pop up, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}