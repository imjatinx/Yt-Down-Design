document.addEventListener("DOMContentLoaded", function () {
    var colorButtons = document.querySelectorAll(".button");

    colorButtons.forEach(function(button) {
        button.addEventListener("click", function () {
            // Remove the 'color-changed' class from all buttons
            colorButtons.forEach(function(btn) {
                btn.classList.remove("button-color");
            });

            // Add the 'color-changed' class to the clicked button
            this.classList.add("button-color");
        });
    });
});

function changeText(newText) {
    var mainHeading = document.getElementById("main-heading");
    mainHeading.textContent = newText;
}

document.addEventListener("DOMContentLoaded", function () {
    var colorButtons = document.querySelectorAll(".button2");

    colorButtons.forEach(function(button2) {
        button2.addEventListener("click", function () {
            // Remove the 'color-changed' class from all buttons
            colorButtons.forEach(function(btn) {
                btn.classList.remove("button-color");
            });

            // Add the 'color-changed' class to the clicked button
            this.classList.add("button-color");
        });
    });
});