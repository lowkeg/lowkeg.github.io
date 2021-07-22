let age;
let genre;
const bouton = document.getElementById("bouton");
const form = document.querySelector("form");
console.log(bouton);
let resultat = document.getElementById("result");

function verifimposition() {
  age = document.getElementById("age-saisi");
  console.log(age);
  genre = document.getElementById("genre-saisi");
  
  if (age.value > 20 && genre.value == "Masculin") {
    resultat.classList.remove("paie" ,"exo");
    resultat.classList.add("paie");
    resultat.textContent = "Vous êtes imposable";
  } else if (age.value > 17 && age.value < 36 && genre.value == "Feminin") {
    resultat.classList.remove("paie" ,"exo");
    resultat.classList.add("paie");
    resultat.textContent = "Vous êtes imposable";
  } else {
    resultat.classList.remove("paie" ,"exo");
    resultat.classList.add("exo");
    resultat.textContent = "Vous n'êtes pas imposable";
  }
}
// return alert("vous n'êtes pas imposable");
form.addEventListener("submit", verifimposition);
