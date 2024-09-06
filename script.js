// Set font size of the first <h1> element
document.getElementsByTagName("h1")[0].style.fontSize = "30px";

$(document).ready(function() {
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
