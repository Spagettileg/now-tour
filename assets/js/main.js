// Change

const container = document.querySelector('.container');

document.querySelector('.open-navbar-icon').addEventListener("click", () => {
    container.classList.add('change');
});

document.querySelector('.close-navbar-icon').addEventListener("click", () => {
    container.classList.remove('change');
});


// Array of colours

const colors = ["#6495ED", "#7FFFD4", "#FFA07A", "#F08080", "#AFEEEE"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach((item) => {
    item.style.cssText = `background-color: ${colors[i++]}`;
});

// Toggle function to enable tour cards to flip from top to rear.

Array.from(document.querySelectorAll(".nav-button")).forEach((item) => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle("change");
    };
});

// Copyright Year

$(document).ready(function () {

    // Website authors developer years appear in the footer
     
    $('#developer-years').text('2018 - ' + new Date().getFullYear());
    
});

// Scroll to top of page function

    $("a[href='#move-up']").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });

    // If position of vertical scroll is above 575px, for 
    // return to top button to disappear.
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 575) {
            $('.move-top').fadeIn();
        } else {
            $('.move-top').fadeOut();
        }
    });