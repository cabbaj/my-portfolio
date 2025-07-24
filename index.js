let sun = document.getElementById("sun-icon");
let moon = document.getElementById("moon-icon");
let themeBtn = document.getElementById("themeBtn");

// set default theme
document.body.classList.add("light");
sun.style.display = "none";

themeBtn.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light");

  // add class to body when click the botton
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");

  // show differece theme icon
  if (isLight) {
    sun.style.display = "";
    moon.style.display = "none";
  } else {
    sun.style.display = "none";
    moon.style.display = "";
  }
});
