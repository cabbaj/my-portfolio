let sun = document.getElementById("sun-icon");
let moon = document.getElementById("moon-icon");
let themeBtn = document.getElementById("themeBtn");

// set default theme
sun.style.display = "none";

themeBtn.addEventListener("click", () => {
  // check isDark while click the button
  const isDark = document.body.classList.contains("dark");

  document.body.classList.toggle("dark");

  // display icon theme
  if (isDark) {
    sun.style.display = "none";
    moon.style.display = "";
  } else {
    sun.style.display = "";
    moon.style.display = "none";
  }
});

