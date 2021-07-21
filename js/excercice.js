let age;
let genre;


let bouton = document.getElementById("bouton");
console.log(bouton);
let resultat = document.getElementById("result");


function verifimposition() {
  age = document.getElementById("age-saisi");
  console.log(age);
  genre = document.getElementById("genre-saisi");
 
  if (age.value>20 && genre.value =="Masculin"){
      
     resultat.innerHTML = "<p class=alert-danger> Vous êtes imposables</p>";
  }
  else if (age.value>17 && age.value<36 && genre.value=="Feminin") {
     resultat.innerHTML="<p class=alert-danger> Vous êtes imposables</p>";
    
  }else{
    resultat.innerHTML="<p class=alert-primary>Vous n'êtes pas imposables</p>"; 

  }
  // return alert("vous n'êtes pas imposable");
} 
bouton.addEventListener("click",verifimposition,false)