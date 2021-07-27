let billet5;
let billet10;
let piece1;
let doit;
let affichage;
const bouton = document.getElementById("bouton");
let result = document.getElementById("result");
let apayer;
let payer;
function rendu(e) {e.preventDefault()
  apayer=document.getElementById("m").value;
  payer = document.getElementById("h").value;
 console.log(doit = apayer - payer);
alert ("vous devez " + doit +" €") 
billet10=0
while (doit>10) {
 doit = doit - 10;
 billet10++ 
 console.log(doit);
 console.log(billet10);

}
billet5=0;
while (doit>5) {
  doit=doit-5
  billet5++
}  
piece1=0;
while (doit>0) {
  doit= doit-1;
  piece1++
}
affichage=billet10 + " billet(s) de 10€ " + billet5 + " billet(s) de 5€ " + piece1 + " piéce(s) de 1€ ";
result.classList.add("hours");
result.textContent=affichage;
}
bouton.addEventListener("click", rendu);
