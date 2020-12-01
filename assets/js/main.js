// Toggle function to enable tour cards to flip from top to rear.

Array.from(document.querySelectorAll(".nav-button")).forEach((item) => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle("change");
    };
});
