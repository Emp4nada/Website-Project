//function to check if each field is valid
function checkValidity(inputId){
    const inputBox = document.getElementById(inputId)
    //make sure inputBox isn't empty
    if (inputBox.value ===''){return false;}
    if (inputBox){const inputValue = inputBox.value.trim();
    
    //checking firstName & lastName field
    if (inputId === "firstName" || inputId === "lastName"){
        if (inputValue.length >=3 && inputValue.length <= 15){return true;}
        else {return false;}}
    
    //checking phoneNum field
    if (inputId === "phoneNum"){
        const phoneNumber = parseInt(inputValue, 10);
        if (phoneNumber >= 1000000000 && phoneNumber <= 9999999999){return true;}
        else {return false;}}

    //checking email field    
    if (inputId === "Email"){
        if (inputValue.includes("@") && inputValue.includes(".")) {return true;}
        else {return false;}}

    //checking date field
    if (inputId === "Date"){
        const inputDate = new Date(inputValue);
        const currentDate = new Date();
        currentDate.setHours(0,0,0,0);
        if (inputDate >= currentDate) {return true;}
        else {return false;}}
    
    //checking time field
    if (inputId === "Time"){
        let [hours, minutes] = inputValue.split(':').map(Number);
        let timeMinutes = hours * 60 + minutes;
        if (timeMinutes >= (9 *60) && timeMinutes <= (17*60)){return true;}
        else {return false;}}
    
    //Salesman and carChoice simply need selections to be valid which was already checked above
        if (inputId === "Salesman" || inputId ==="carChoice"){return true;}}
    
        else {return false;}}
    
    


//function to change color of input fields//        
function changeBackgroundColor(inputId, valid){
    const inputField = document.getElementById(inputId);
        if (valid === true){inputField.style.backgroundColor = "rgba(0, 128, 0, 0.5)";}
        else {inputField.style.backgroundColor = "rgba(255, 0, 0, 0.5)";}}
//function to be run when the event listener detects an input into the form
function inputChange(event){
    let idArray = ["firstName", "lastName", "phoneNum", "Email", "Date", "Time", "Salesman", "carChoice"];
    
    if (event.target.matches('input, select')){
        let i=0;
        while (i < 8){
            changeBackgroundColor(idArray[i],checkValidity(idArray[i]));
            i++;}}}
//event listener for inputs on form//
const reserveForm = document.getElementById('reserveForm');
reserveForm.addEventListener('change', inputChange);


let reservedCarChoiceCarChoice;
//event listener for form submission and function to follow upon completion
reserveForm.addEventListener('submit', function(event){
    event.preventDefault();
    //creating the alert to confirm to users the car they reserved
    const selectCarChoice = document.getElementById('carChoice');
    const reservedCarChoice = selectCarChoice.options[selectCarChoice.selectedIndex].text;
    alert('Form Submitted. You reserved the ' + reservedCarChoice);
    //utilizing session storage to track that to form has been completed
    sessionStorage.setItem('formFinished', 'true');
    //steps to fix reservation status
    document.getElementById('greenCheck').style.display = 'inline';
    document.querySelector('.rStatus').innerHTML = '<strong>Reservation Status: Confirmed</strong> ';
    document.querySelector('.rStatus').appendChild(document.getElementById('greenCheck'));
    reserveForm.submit();})
//event listener for once the page is loaded to check if the form has been filled out
document.addEventListener('DOMContentLoaded', function () {
    const reserveForm = document.getElementById('reserveForm');
    const reservationStatus = document.querySelector('.rStatus');
    const greenCheck = document.getElementById('greenCheck');
    
    //checks if the form has been previously submitted by checking session storage
    if (sessionStorage.getItem('formFinished') === 'true') {
        displayReservationStatus();}
     reserveForm.addEventListener('submit', function (event) {
        event.preventDefault();
        sessionStorage.setItem('formFinished', 'true');
        displayReservationStatus();});
    // function to change the reservation status text and show the green check image
    function displayReservationStatus() {
        reservationStatus.innerHTML = '<strong>Reservation Status: Confirmed</strong> ';
        greenCheck.style.display = 'inline';
        reservationStatus.appendChild(greenCheck);
    }
});
