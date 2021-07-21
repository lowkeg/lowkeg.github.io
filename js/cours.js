// la console log permet d'afficher du test dans la console de l'inspecteur du navigateur
console.log("hello");
// declaration de variable
var maVariable = "Ma premier variable,";
// var n'est plus utilisé
// on utilise maintenant
let maVariableDeux = "Ma seconde variable,";
// let pour une variable qui peut être modifier
const maVariableTrois = "Ma troisième variable.";
// const pour une variable constante
console.log(maVariable, maVariableDeux, maVariableTrois);
maVariableDeux = "Ma deuxieme variable prend une nouvelle valeur";
// une console pour voir le changement
console.log(maVariable, maVariableDeux, maVariableTrois);
// les guillements "" pour les chaines de caracteres
let chaine = "je suis une chaine de caractere";
// cela fonctionne aussi avec des guillemets simples ''
let chaine1 = "je suis une autre chaine de caractere";
// et si l'on rajoute un mot avec  simple guillemet il faut utiliser le \
let chaine2 = "j'ai fait mes premiers pas en js il y à peu de temps";
console.log(
  maVariable,
  maVariableDeux,
  maVariableTrois,
  chaine,
  chaine1,
  chaine2
);
// concatenation
let concatene =
  "ceci est de la concatenation :" +
  maVariable +
  maVariableDeux +
  chaine +
  chaine1;
console.log(concatene);
// avec guillemet touche 7
let concatene1 = `test de concatenation: ${concatene} , ${maVariable}`;
console.log(concatene1);
// chaine de caractere
let string = "je suis une chaine de caractere 0 1 2 3 ";
// nombre
let number = 24;
// boolean
let boolean = true;
// un tableau
let array = ["je", "suis", "un tableau", "avec", 6, "colonnes"];
console.log(array);
// un objet
let objet = {
  prenom: "audrey",
  age: 34,
  ville: "bordeaux",
};
console.log(objet);
// typeof pour voir le type de la variable
console.log(typeof array);
console.log(typeof objet);
console.log(typeof chaine);
console.log(typeof number);
// variable non defini
let nondefini;
console.log(nondefini);
// variable null
let nulle = null;
console.log(nulle);
// les operateurs
// puissance **
console.log(4 ** 5);
console.log(4 * 5);
console.log(4 - 5);
console.log(4 / 5);
console.log(4 + 5);
// operateurs d'affectations ++ -- pas de 1
let total = 0;
total = total + 1;
++total;
total++;
--total;
total--;
++total;

console.log(total);

total = 2;
total *= 5;
total /= 2.5;
total **= 4;

console.log(total);
// sens des opérateurs cas particuliers ++x à retenir l'element à droite donne sa valeur à l'element à gauche
total = 0;
let x = 4;
total = ++x;
console.log(total);
// les structures de contrôles "si if" "sinon else"
let w = 2;
let y = 5;

if (w < y) {
  console.log("valeur si vrai w est inférieur à y");
} else {
  console.log("valeur si faux w est superieur à y");
}

w = 6;
if (w < y) {
  console.log("valeur si vrai w est inférieur à y");
} else {
  console.log("valeur si faux w est superieur à y");
}

// pour tester si w existe ou bien est vrai
if (w) {
  console.log("w existe");
} else {
  ("w n'existe pas");
}

// pour tester si w n'existe pas on utilise le !
if (!w) {
  console.log("w n'existe pas");
} else {
  console.log("w existe");
}
// === pour l'égalité de contenu et de type(chaine number) == pour égalité de contenu|| pour le ou
if (w === y || w > 2) {
  console.log("true");
} else {
  console.log("false");
}
// !== pour testé que le contenu et le type sont différent != pour testé si le contenu est différent&& et ceci pour le et
if (w !== y && w > 2) {
  console.log(
    "true " + w + " et différent de " + y + " et, " + w + " et plus grand que 2"
  );
} else {
  console.log("false");
}
w = 5;
y = "5";
if (w === y) {
  console.log("true");
} else if (w == y) {
  console.log("vrai " + w + " et " + y + " sont égaux en valeur");
}
w = 8;
y = "5";
if (w === y) {
  console.log("true");
} else if (w == y) {
  console.log("vrai " + w + "et" + y + " sont égaux en valeur");
} else {
  console.log("faux " + w + " et " + y + " ne sont pas du tout égaux");
}
// if else en mode "ternaire"
w = 8;
y = "8";
w == y ? console.log("true") : console.log("false");
w === y ? console.log("true") : console.log("false");
// les fonctions
function faire() {
  console.log("ma première function");
  console.log("trop cool");
}
faire();
// fonction fléché
const unetache = (tache) => {
  console.log("je fais" + tache);
};
unetache(" une fonction fleché");
unetache(" du java script avec fonction fléché");
// le return arrête la function et retourne une valeur
function calc(w, y) {
  return w + y;
}
calc(4, 7);

// fonction qui s'execute toute seul
(function jeMeJoueSeul() {
  console.log("voila une function qui se joue seul");
})();

// fonction fléché qui se joue seul
(() => {
  console.log("moi aussi je me joue seul");
})();

function add2() {
  let a = 4;
  return a + 2;
}
