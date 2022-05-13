import newUser from "/data/data.js"; // Importe la fonction qui permet de crée un new user
("use strict");

let user1; // Crée la var user1 qui contiendra lutilisateur a inserer
export { user1 };

function isChecked(box) {
  // Cette fonction vérifie si les checkbox de la page popup.html sont checker pour générer unique les donnnées souhaités
  if (box.checked == true) {
    return true;
  } else {
    return false;
  }
}

let button = document.getElementById("fill");

let final_user = {
  nom: "None",
  prenom: "None",
  mdp: "None",
  sexe: "None",
  pseudo: "None",
  mail: "None",
};
let h1_test; // Ici on test s'il existe un header h1 puis si il en existe, on regarder si c'est le header du popup
if (document.querySelector("h1")) {
  if (document.querySelector("h1").innerHTML == "Anti-Spam extension") {
    h1_test = true;
  }
} else {
  h1_test = false;
}

if (h1_test == true) {
  // Le if permet d'éviter une erreur car le script sexecute aussi sur les page visitée par l'utilisateur

  button.addEventListener("click", () => {
    // Action a faire quand le button est cliquée;
    console.log("bouton pressed");
    user1 = newUser();
    let list_utilisateur = [""];
    let check_automail = document.getElementById("automail");
    let check_autoname = document.getElementById("autoname");
    let check_autopasswd = document.getElementById("autopasswd");
    let check_autopseudo = document.getElementById("autopseudo");

    //Affichage des info (à supprimer a la fin)
    let champs_mail = document.getElementById("champs_mail");
    let champs_name = document.getElementById("champs_name");
    let champs_passwd = document.getElementById("champs_passwd");
    let champs_pseudo = document.getElementById("champs_pseudo");
    let champs_prenom = document.getElementById("champs_prenom");

    if (isChecked(check_automail) == true) {
      champs_mail.innerText = "mail: " + user1.mail;
      final_user.mail = user1.mail;
    } else {
      champs_mail.innerText = "mail: ";
    }

    if (isChecked(check_autoname) == true) {
      champs_name.innerText = "nom: " + user1.nom;
      champs_prenom.innerText = "prenom: " + user1.prenom;
      final_user.nom = user1.nom;
      final_user.prenom = user1.prenom;
    } else {
      champs_name.innerText = "nom";
      champs_prenom.innerText = "prenom: ";
    }
    if (isChecked(check_autopasswd) == true) {
      champs_passwd.innerText = "passwd: " + user1.mdp;
      final_user.mdp = user1.mdp;
    } else {
      champs_passwd.innerText = "passwd: ";
    }
    if (isChecked(check_autopseudo) == true) {
      final_user.pseudo = user1.pseudo;
      champs_pseudo.innerText = "pseudo: " + user1.pseudo;
    } else {
      champs_pseudo.innerText = "pseudo: ";
    }
  });
}
export { final_user };
