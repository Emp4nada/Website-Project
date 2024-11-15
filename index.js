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
//event listener for once the page is loaded to check if the form has been filled out
document.addEventListener('DOMContentLoaded', function () {
    const reserveForm = document.getElementById('reserveForm');
    const reservationStatus = document.querySelector('.rStatus');
    const greenCheck = document.getElementById('greenCheck');
    
    //if session storage shows the form has been completed the reservation status is updated
    if (sessionStorage.getItem('formFinished') === 'true') {
        displayReservationStatus();}
        function displayReservationStatus() {
            reservationStatus.innerHTML = '<strong>Reservation Status: Confirmed</stong> ';
            greenCheck.style.display = 'inline';
            reservationStatus.appendChild(greenCheck);
        }
    });
