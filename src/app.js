import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Definión de Arrays
const suits = ["♦", "♥", "♠", "♣"];
const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// Creación de la función para generar la Carta Aleatoria (RandomCard)
function generateRandomCard(){
  console.log(document.getElementById("card"));
  const card=document.getElementById("card");
  const cardTop = card.querySelector(".card-top");
  const cardNumber = card.querySelector(".card-number");
  const cardBottom = card.querySelector(".card-bottom");

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  // Modificar dinámicamente el contenido de la carta
  cardTop.innerHTML = randomSuit;
  cardNumber.innerHTML = randomNumber;
  cardBottom.innerHTML = randomSuit;

  //Limpieza de Clases y generación de los estilos de la carta
  card.classList.remove("spade","heart","diamond","club");
  if (randomSuit === "♥") {
    card.classList.add("heart");
  } else if (randomSuit === "♦") {
    card.classList.add("diamond");
  } else if (randomSuit === "♠") {
    card.classList.add("spade");
  } else if (randomSuit === "♣") {
    card.classList.add("club");
  }
}

// Llamada a la función y activación del botton
window.onload = function() {
  // Llamada a la función y activación del botton
  generateRandomCard();
  // Ejecución de la función cuando se da click en el botón
  document.getElementById("generate").addEventListener("click",generateRandomCard);
};
