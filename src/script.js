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
  let nom = "";
  nom =
    nomCourants[Math.floor(Math.random() * nomCourants.length)].toLowerCase(); // nmbr aléatoire entre 0 et la longueur de la liste des nom Courants

  // Prénom
  let prenom = "";
  prenom =
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
  identifiant = "";
  identifiant += prenom;
  identifiant += "_";
  for (let i = 0; i < nom.length; i++) {
    if (isConsonne(nom[i]) == true) {
      identifiant += nom[i];
    }
  }

  //Mail
  let mail = "";
  mail = nom + "." + prenom + "@" + "sharklasers.com";

  //total
  return {
    mdp: mdp,
    nom: nom,
    prenom: prenom,
    sexe: sexe,
    identifiant: identifiant,
    mail: mail,
  };
}

function isChecked(box) {
  if (box.checked == true) {
    return true;
  } else {
    return false;
  }
}

/* DETECTION ET AUTOREMPLISSAGE*/
function getPasswordInput() {
  return document.querySelector('form input[type="password"]');
}

function getFormElement() {
  var passwordInput = getPasswordInput();
  while (!(passwordInput instanceof HTMLFormElement)) {
    passwordInput = passwordInput.parentElement;
  }
  return passwordInput;
}

function getUsernameInput() {
  return getFormElement().querySelector('input[type="text"]');
}

let check_automail = document.getElementById("automail");
let choice_automail = isChecked(check_automail);
check_automail.addEventListener("click", () => {
  choice_automail = isChecked(check_automail);
});

let check_autoname = document.getElementById("autoname");
let choice_autoname = isChecked(check_autoname);
check_autoname.addEventListener("click", () => {
  choice_autoname = isChecked(check_autoname);
});

let check_autopasswd = document.getElementById("autopasswd");
let choice_autopasswd = isChecked(check_autopasswd);
check_autopasswd.addEventListener("click", () => {
  choice_autopasswd = isChecked(check_autopasswd);
});

let check_autopseudo = document.getElementById("autopseudo");
let choice_autopseudo = isChecked(check_autopseudo);
check_autopseudo.addEventListener("click", () => {
  choice_autopseudo = isChecked(check_autopseudo);
});

//Bouton principal

let button = document.getElementById("fill");
button.addEventListener("click", () => {
  // action a faire quand le button est cliquée;
  console.log("bouton pressed");

  let champs_mail = document.getElementById("champs_mail");
  let champs_name = document.getElementById("champs_name");
  let champs_passwd = document.getElementById("champs_passwd");
  let champs_pseudo = document.getElementById("champs_pseudo");
  let champs_prenom = document.getElementById("champs_prenom");

  let user1 = newUser();
  if (choice_automail == true) {
    champs_mail.innerText = "mail: " + user1.mail;
  } else {
    champs_mail.innerText = "mail: ";
  }

  if (choice_autoname == true) {
    champs_name.innerText = "nom: " + user1.nom;
    champs_prenom.innerText = "prenom: " + user1.prenom;
  } else {
    champs_name.innerText = "nom";
    champs_prenom.innerText = "prenom: ";
  }
  if (choice_autopasswd == true) {
    champs_passwd.innerText = "passwd: " + user1.mdp;
  } else {
    champs_passwd.innerText = "passwd: ";
  }
  if (choice_autopseudo == true) {
    champs_pseudo.innerText = "pseudo: " + user1.identifiant;
  } else {
    champs_pseudo.innerText = "pseudo: ";
  }

  if (getPasswordInput()) {
    console.log("test");
    getUsernameInput().value = user1.identifiant;
    getPasswordInput().value = user1.mdp;
  }
});
