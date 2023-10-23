document.addEventListener("DOMContentLoaded", function () {
  var colorButtons = document.querySelectorAll(".button");

  colorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Remove the 'color-changed' class from all buttons
      colorButtons.forEach(function (btn) {
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

  colorButtons.forEach(function (button2) {
    button2.addEventListener("click", function () {
      // Remove the 'color-changed' class from all buttons
      colorButtons.forEach(function (btn) {
        btn.classList.remove("button-color");
      });

      // Add the 'color-changed' class to the clicked button
      this.classList.add("button-color");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var videobtn = document.getElementById("video");
  var thumbnailbtn = document.getElementById("thumbnail");
  var videodiv = document.getElementById("videodiv");
  var thumbnaildiv = document.getElementById("thumbnaildiv");
  videobtn.addEventListener("click", function () {
    videodiv.style.display = "block"; // Show Table 1
    thumbnaildiv.style.display = "none"; // Hide Table 2
  });
  thumbnailbtn.addEventListener("click", function () {
    thumbnaildiv.style.display = "block"; // Show Table 1
    videodiv.style.display = "none"; // Hide Table 2
  });
});
