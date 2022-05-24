# Antispam Extension

- **Memo HTML**
    
    [Memo htlm.pdf](Antispam%20Extension%20fe60ee499cf74296815c97007a7ea738/Memo_htlm.pdf)
    
- **Memo CSS**
    
    [Memo css.pdf](Antispam%20Extension%20fe60ee499cf74296815c97007a7ea738/Memo_css.pdf)
    
- Event Js
    
    [Référence des événements | MDN](https://developer.mozilla.org/fr/docs/Web/Events)
    

### Cahier des charges :

***Contexte et définition du problème:***

- Les formulaires d’inscriptions demande trop d’informations personnelles dont ils n’ont pas besoins.

***Objectif du projet :***

- Créer une extension de navigateur qui auto-remplis des fausse informations tels que le nom, le prénom, l’age etc ainsi qu’une adresse mail jetable (type yopmail) et un mot de passe qui sera stocké.

***Solutions actuelle:***

- [Autofill](https://chrome.google.com/webstore/detail/autofill/nlmmgnhgdeffjkdckmikfpnddkbbfkkk) by Tohodo: extension qui autoremplis les formulaire en fonction de profil d’autocomplétion prélablement configuré. Problème: necessite de recréer un profil pour chaque nouveau formulaire, utilise de vraie informatio, ne génere rien mais autoremplis juste les données qu’on lui donnes.

***Langages utilisés:***

- Javascript (langage obligatoire pour les extension de navigateurs)
- HTML pour le squellette de l’extansion
- CSS le design de l’extansionx

***Attentes et contraintes :***

- Créer l’extension (javascript + html)
- Système d’autocomplétion et détection de champs du formulaire
- Bouton de déclenchement (ex : bouton « auto remplir »)
- Onglet récupérant les mails de adresses yopmail (api et request)
- Animation et design en CSS
- Bouton donation pour faire de l’argent plein d’argent

***Maquette/Design voulue:***

![Untitled](Antispam%20Extension%20fe60ee499cf74296815c97007a7ea738/Untitled.png)

![Untitled](Antispam%20Extension%20fe60ee499cf74296815c97007a7ea738/Untitled%201.png)

![Untitled](Antispam%20Extension%20fe60ee499cf74296815c97007a7ea738/Untitled%202.png)

***Todo:***

- [x]  Faire une maquette visuelle des attentes
- [x]  Programmer la version html de l’extension (champs a cocher bouton text lien)
- [x]  Coder le CSS
- [x]  Faire lapp en js
- [x]  Programmer les differentes fonctions
- [x]  -Detections des champs
- [ ]  -Auto-Remplissage
- [ ]  -Stockage de l’identifiant et du mots de passe dans un onglets
- [ ]  -webmail guerrillamail
- [ ]  -Onglets messagerie qui récupere les messagerie des mail yopmail
- [ ]  -Faire un readme mode d’emplois

![Untitled](Antispam%20Extension%20fe60ee499cf74296815c97007a7ea738/Untitled%203.png)

***Sources et lien utilisé pour la réalisation du projet:***

[Uncaught TypeError: Cannot read properties of null (reading 'addEventListener') Chrome Extension](https://stackoverflow.com/questions/70052292/uncaught-typeerror-cannot-read-properties-of-null-reading-addeventlistener)

[](https://javascript.plainenglish.io/creating-a-chrome-extension-with-react-d92db20550cb)

- **Apprendre le javascript**
- [x]  Apprendre à programmer avec Javascript:

[Apprenez à programmer avec JavaScript](https://openclassrooms.com/fr/courses/6175841-apprenez-a-programmer-avec-javascript)

- [ ]  Javascript pour le web:

[Écrivez du JavaScript pour le web](https://openclassrooms.com/fr/courses/5543061-ecrivez-du-javascript-pour-le-web)

- [ ]  React:

[Débutez avec React](https://openclassrooms.com/fr/courses/7008001-debutez-avec-react)

- Comprendre comment fonctionne une extension chrome

[Chrome Extensions | Daniel Shiffman](https://shiffman.net/a2z/chrome-ext/)

[API Reference - Chrome Developers](https://developer.chrome.com/docs/extensions/reference/)

[11.1: Introduction to Chrome Extensions - Programming with Text](https://www.youtube.com/watch?v=hkOTAmmuv_4&list=PLRqwX-V7Uu6bL9VOMT65ahNEri9uqLWfS)

- Services de mails temporaires:

[About GuerrillaMail](https://www.guerrillamail.com/about)

[Guerrilla Mail API](https://docs.google.com/document/d/1Qw5KQP1j57BPTDmms5nspe-QAjNEsNg8cQHpAAycYNM/edit?hl=en)

[https://stackoverflow.com/questions/13667176/chrome-extension-onmessage](https://stackoverflow.com/questions/13667176/chrome-extension-onmessage)