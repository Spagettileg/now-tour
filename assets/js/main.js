// Toggle function to enable tour cards to flip from top to rear.

Array.from(document.querySelectorAll(".nav-button")).forEach((item) => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle("change");
    };
});

// Website author developer years

$(document).ready(function () {

    // Website authors developer years appear in the footer
     
    $('#developer-years').text('2018 - ' + new Date().getFullYear());
    
});