// Code for slider on the homepage
var indexValue = 1;
showImg(indexValue);
function side_slide(direction) {
    showImg(indexValue += direction);
}
// Function allows a click on each arrow to change image
function showImg(e) {
    const img = document.querySelectorAll("#slideimg");
    if (e > img.length) {
        indexValue = 1;
    }
    if (e < 1) {
        indexValue = img.length;
    }
    var i;
    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none"
    }
    img[indexValue - 1].style.display = "block";
}
