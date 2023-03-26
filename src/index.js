var toggleBtn = document.getElementById("first_button");
var slider = document.querySelector(".outer_div");

var toggleBtn2 = document.getElementById("second_button");
var slider2 = document.querySelector(".inner_div");
// 1st button effect
toggleBtn.addEventListener("click", function () {
  if (toggleBtn.checked) {
    slider.style.backgroundColor = "green";
  } else {
    slider.classList.toggle("dark-mode");
  }
});

// 2nd transition

toggleBtn2.addEventListener("click", function () {
  if (toggleBtn2.checked) {
    slider2.classList.toggle("dark-white");
  } else {
    slider2.classList.toggle("dark-white");
  }
});
