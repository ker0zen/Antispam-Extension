import { expcaracteres } from "/data/data.js";
let caracteres = expcaracteres();

import { expnomCourants } from "/data/data.js";
let nomCourants = expnomCourants();

import { expprenomCourants } from "/data/data.js";
let prenomCourants = expprenomCourants();

import { expalphabet } from "/data/data.js";
let alphabet = expalphabet();

import { expconsonne } from "/data/data.js";
let consonne = expconsonne();

function isConsonne(x) {
  for (let i = 0; i < consonne.length; i++) {
    if (x == consonne[i]) {
      return true;
    }
  }
}

function newUser() {
  //Mot de passe
  let mdp = "";
  let nombreAleatoire;
  let uneChanceSurDeux;
  for (var i = 0; i < 7; i++) {
    nombreAleatoire = Math.floor(Math.random() * 11); //nmbr aléatoire entre 0 et 10
    mdp += nombreAleatoire;
    let uneChanceSurDeux = Math.random();
    if (uneChanceSurDeux >= 0.5) {
      mdp += caracteres[nombreAleatoire];
    }

    if (uneChanceSurDeux <= 0.5) {
      mdp += alphabet[Math.floor(Math.random() * 26)];
    }
  }

  // Nom
  let nom =
    nomCourants[Math.floor(Math.random() * nomCourants.length)].toLowerCase(); // nmbr aléatoire entre 0 et la longueur de la liste des nom Courants

  // Prénom
  let prenom =
    prenomCourants[
      Math.floor(Math.random() * prenomCourants.length)
    ].toLowerCase(); // nmbr aléatoire entre 0 et la longueur de la liste des prenom Courants

  //Sexe
  let sexe = "";
  uneChanceSurDeux = Math.random();
  if (uneChanceSurDeux >= 0.5) {
    sexe = "m";
  } else {
    sexe = "f";
  }

  //identifiant (au format prenom_consonneDuNom)
  let identifiant = "";
  identifiant += prenom;
  identifiant += "_";
  for (let i = 0; i < nom.length; i++) {
    if (isConsonne(nom[i]) == true) {
      identifiant += nom[i];
    }
  }
  //Zipcode
  //total
  return {
    mdp: mdp,
    nom: nom,
    prenom: prenom,
    sexe: sexe,
    identifiant: identifiant,
  };
}

//Tableau nécessaire

//-------------------------------------------------------

let user1 = newUser();
console.log(user1);
