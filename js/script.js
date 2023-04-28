const changetheme = document.querySelector("#change-theme");

function toggleDark() {
  document.body.classList.toggle("dark");
}

function loadtheme() {
  const mode = localStorage.getItem("dark");
  if (mode) {
    toggleDark();
  }
}

loadtheme();

changetheme.addEventListener("change", () => {
  toggleDark();
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});
