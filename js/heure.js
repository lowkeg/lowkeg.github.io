let h;
let m;
let s;

let affichage;
let result = document.getElementById("result");
const bouton = document.getElementById("bouton");
function displayhours(e) {
  e.preventDefault();
  h = document.getElementById("h").value;
  m = document.getElementById("m").value;
  s = document.getElementById("s").value;
  s++;
  if (s > 59) {
    s = 0;
    m++;
  }
  if (m > 59) {
    m = 0;
    h++;
  }

  if (h > 23) {
    h = 0;
  }
  affichage = h + "h" + m + "m" + s + "s";
  result.classList.add("hours");
  result.textContent = affichage;
}

bouton.addEventListener("click", displayhours);
