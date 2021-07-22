let number;
let resultat;
const a = 0.1;
const b = 0.09;
const c = 0.08;
const d = 1;
let result = document.getElementById("result");
const form = document.querySelector("form");
console.log(result);
function price() {
  number = document.getElementById("photocopies").value;
  console.log(number);
  if (number > 0 && number < 11) {
    resultat = number * a;
    result.classList.add("paie", "euro");
    result.textContent = resultat;
  } else if (number > 10 && number < 31) {
    resultat = (10 * a) + (number - 10)*0.09;
    result.classList.add("paie", "euro");
    result.textContent = resultat;
  } else {
    resultat = (10 * a) + (20 * 0.09) +(number - 30)*0.08 ;
    result.classList.add("paie", "euro");
    result.textContent = resultat;
  }
}

form.addEventListener("submit", price);
