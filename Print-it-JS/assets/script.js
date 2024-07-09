"use strict";   // "utiliser des règles strictes

//! ************ CONSTANTS ************

const slides = [
  {
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  }
]

const LENGTH = slides.length;
const URL = "./assets/images/slideshow/";

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const image = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dots = document.querySelector(".dots");

//! ************ VARIABLE ************

let currentSlide = 0;
let allDots;

//! ************ FUNCTIONS ************

//Mettre à jour le style des points pour indiquer la diapositive en cours.

const updateDots = () => {
  for (let i = 0; i < allDots.length; i++) {
    allDots[i].classList.remove("dot_selected"); 
  }

  allDots[currentSlide].classList.add("dot_selected");
}

//Met à jour le curseur en définissant la source de l'image et le slogan en fonction de la diapositive en cours.
 // Les points sont également mis à jour pour indiquer la diapositive en cours. 

const updateSlider = () => {
  image.setAttribute('src', URL + slides[currentSlide].image);
  tagLine.innerHTML = slides[currentSlide].tagLine;
  
  updateDots();
}

// Ajoute des points pour la navigation.
//Ajoute des points à l'élément conteneur dots en fonction du nombre de diapositives.
// Chaque point est créé comme un élément span avec la classe "dot". Les points sont
// ajoutés à l'élément conteneur dots. Les points sont ajoutés à l'élément conteneur dots. Après avoir ajouté les points, la fonction
// sélectionne le premier élément point et lui ajoute la classe "dot_selected".
const addDots = () => {
  for (const slide of slides) {
    const addDot = document.createElement("span");
    addDot.classList = "dot";
    dots.appendChild(addDot);

    allDots = document.getElementsByClassName("dot");
    document.querySelector(".dot").classList.add("dot_selected");
  }
}

// Met à jour la diapositive actuelle par rapport à la diapositive précédente.
// Définit le slogan et la source de l'image en fonction de la nouvelle diapositive.
// Appelle la fonction updateDots pour indiquer la diapositive en cours.

const slideLeft = () => {
  currentSlide = (currentSlide + LENGTH - 1) % LENGTH;
  tagLine.innerHTML = slides[currentSlide].tagLine;

  image.setAttribute('src', URL + slides[currentSlide].image);
  updateDots();
}

// Met à jour la diapositive actuelle par rapport à la diapositive précédente.
// Définit le slogan et la source de l'image en fonction de la nouvelle diapositive.
// Appelle la fonction updateDots pour indiquer la diapositive en cours.

const slideRight = () => {
  currentSlide = (currentSlide + 1) % LENGTH;
  tagLine.innerHTML = slides[currentSlide].tagLine;

  image.setAttribute('src', URL + slides[currentSlide].image);
  updateDots();
}

// Ajoute des gestionnaires d'évènements pour la navigation.
// Ajoute des récepteurs d'événements aux éléments arrowRight et arrowLeft.
const addListeners = () => {
  arrowRight.addEventListener("click", slideRight);
  arrowLeft.addEventListener("click", slideLeft);
}

// ************ MAIN ************//

addDots();
addListeners();
updateSlider();
