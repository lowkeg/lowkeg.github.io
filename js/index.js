// selecteurs
const baliseHtml = document.querySelector("h4");
console.log(baliseHtml);

const goodreponse = document.querySelector(".rep1");
console.log(goodreponse);
const badreponse = document.querySelector(".rep2");
console.log(badreponse);

const btn1 = document.getElementById("btn1");
console.log(btn1);

const btn2 = document.getElementById("btn2");
console.log(btn2);
const containerQuestion = document.querySelector(".click-event");
console.log(containerQuestion);
// click event
containerQuestion.addEventListener("click", () => {
  console.log("click");
  containerQuestion.classList.toggle("questionclick");
});
btn1.addEventListener("click", () => {
  console.log("click !");
  goodreponse.style.visibility = "visible";
});
btn2.addEventListener("click", () => {
    badreponse.style.visibility='visible'
  console.log("click !");
});
