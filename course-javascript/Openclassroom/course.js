// ==========================================
// 01 Variables
// ==========================================

// Type number 
let numberOfSeasons = 6;
let numberOfEpisodes = 12;

//Type string
let nameOfAuthor = "Espinasse"
let connexionValidation = "Vous êtes connecté"

// Type Boolean
let isAllowed = true
let isNotAllowed = False

// Variable Modified 
let numberOfCats = 3
numberOfCats = 5

let nameOfCat = "Rio"
nameOfCat = "Garfield"

// Opérateurs arithmétiques
// ------ addition +
let totalCDs = 67;
let totalVinyls = 34;
let totalMusic = totalCDs + totalVinyls;

// ------ soustraction - 
let cookiesInJar = 10;
let cookiesRemoved = 2;
let cookiesLeftInJar = cookiesInJar - cookiesRemoved;

// ------ les opérateurs += et -= 
let cookiesInJar = 10;
/* manger deux cookies */
cookiesInJar -= 2;  //il reste 8 cookies
/* cuisson d'un nouveau lot de cookies */
cookiesInJar += 12; // il y a maintenant 20 cookies dans la boîte

// ------ Ajouter ou soustraire un éléments
let numberOfLikes = 10;
numberOfLikes++;  // cela fait 11
numberOfLikes--; // et on revient à 10...qui n'a pas aimé mon article ?

// ------ Multiplication et division 
let costPerProduct = 20;
let numberOfProducts = 5;
let totalCost = costPerProduct * numberOfProducts;
let averageCostPerProduct = totalCost / numberOfProducts;

// ------ Les opétateurs *= et /= 
let numberOfCats = 2;
numberOfCats *= 6;  // numberOfCats vaut maintenant 2*6 = 12;
numberOfCats /= 3;  // numberOfCats vaut maintenant 12/3 = 4;

// ------ Exemple 
let compteur = 0;
compteur++;
compteur = 10;

// ==========================================
// 02 Constantes
// Pour s'assurer de ne pas réaffecter par inadvertance de nouvelles valeurs à ces données, vous allez utiliser des constantes.
// ==========================================

const nombrePostParPage = 20;
nombrePostParPage = 30; // Retournera une erreur dans la console car on ne peut plus changer sa valeur

const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinutes = 60;


// ==========================================
// 03 les Objets
// objet = Stylos > Types d'objets = Stylo à bille, stylo plume etc. 
// ==========================================

// Créer un objet 
let myBook = {
    title: 'The Story of Tau',
    author: 'Will Alexander',
    numberOfPages: 250,
    isAvailable: true
};

// accéder à un objet 

let myBook = {
    title: "L'Histoire de Tao",
    author: "Will Alexander",
    numberOfPages: 250,
    isAvailable: true
};
let bookTitle = myBook.title;  // "L'Histoire de Tao"
let bookPages = myBook.numberOfPages  // 250

// La notation Bracket (Bracket Notation)
let myBook = {
    title: "L'Histoire de Tao",
    author: "Will Alexander",
    numberOfPages: 250,
    isAvailable: true
};
let bookTitle = myBook["title"];  // "L'Histoire de Tao"
let bookPages = myBook["numberOfPages"];  // 250

// ==========================================
// 04 Les classes
// Une classe est comme un plan > Elle permet de construire plusieurs objets du même type (appelés instances de la même classe)
// ==========================================

// Construire une classe
class Book {

}

// utilisation du "Constructor"
class Book {
    constructor(title, author, pages) {
        this.title = title; // this. fait référence à la nouvelle instance 
        this.author = author;
        this.pages = pages;
    }
}

// Création des instances avec le mot clé "new"
let myBook = new Book("Apprendre le Javascript", "Loic Espinasse", 250);

// Exemple 
class episode {
    constructor(title, duration, hasBeenWatched) {
        this.title = title;
        this.duration = duration;
        this.hasBeenWatch = hasBeenWatched;
    }
}

let firstEpisode = new episode('La reina del Flow', 45, false);
let secondEpisode = new episode('Peaky Blinders', 38, true);
let thirdEpisode = new episode('Vengeance de troie', 52, false);

// ==========================================
// 05 Les tableaux (Array)
// ==========================================

let guests = [];
let guests = ["Loic Espinasse", "Sebastien Frere", "Jean Dupont"];

// Accéder aux éléments 
let firstGuest = guests[0]; // Loïc Espinasse
let thirdGuest = guests[2]; // Jean Dupont
let undefinedGuest = guests[12] // undefined

// Exemple avec exercice précédent 
let episodes = [firstEpisode, secondEpisode, thirdEpisode]

// ------ Le comptage d'éléments (length)
let guests = ["Loic Espinasse", "Sebastien Frere", "Jean Dupont"];
let howManyGuests = guests.length; // 3

// ------ Ajouter un élément à la fin
guests.push("Will Alexander"); // ajoute le nouveau nom à la fin du tableau guests

// ------ Ajouter un élément au début 
guests.unshift("Will Alexander"); // Ajoute le nouveau nom au début du tableau

// ------ Supprimer le dernier élément
guests.pop(); // supprime le dernier élément du tableau 


// Exemple avec les exercices précédents 
// Ajouter les episodes au tableau et afficher le nombre d'épisode
episodes.push(firstEpisode, secondEpisode, thirdEpisode, thirdEpisode);
episodes.pop(); // Supprime la derniere ligne ajoutée 2 fois
let numberOfEpisodes = episodes.length

// ==========================================
// 06 Les conditions IF / ELSE
// ==========================================

if (myBoolean) {
    // réaction à la valeur vraie de myBoolean
} else {
    // réaction à la valeur faux de myBoolean
}

// ----- OR
let UserLoggedIn = true;
if (UserLoggedIn) {
    console.log("Utilisateur connecté!");
} else {
    console.log("Alerte, intrus!");
}

// ------ Conditions multiples 
let userLoggedIn = true;
let UserHasPremiumAccount = true;
let userHasMegaPremiumAccount = false;

userLoggedIn && userHasPremiumAccount; // true
userLoggedIn && userHasMegaPremiumAccount; // false

userLoggedIn || userHasPremiumAccount; // true
userLoggedIn || userHasMegaPremiumAccount; // true

!userLoggedIn; // false
!userHasMegaPremiumAccount; // true

// ==========================================
// 07 Les boucles (SWITCH / FOR / WHILE)
// ==========================================


// SWITCH = 
// FOR = Permet de répéter un bout de code un certain nombre de fois 
// WHILE = Permet de répéter un bout de code tant qu'une condition est remplie


// ------ Exemple Tableau de données
let firstUser = {
    name: "Will Alexander",
    age: 33,
    accountLevel: "normal"
};

let secondUser = {
    name: "Sarah Kate",
    age: 21,
    accountLevel: "premium"
};

let thirdUser = {
    name: "Audrey Simon",
    age: 27,
    accountLevel: "mega-premium"
};

// ------ SWITCH
switch (firstUser.accountLevel) {
    case 'normal':
        console.log('You have a normal account!');

        break;
    case 'premium':
        console.log('You have a premium account!');

        break;
    case 'mega-premium':
        console.log('You have a mega premium account!');
        break;

    default:
        console.log('Unknown account type!');
}

// ------ FOR 
const numberOfPassengers = 10;
for (let i = 0; i < numberOfPassengers; i++) {
    console.log("Passager embarqué !");
}

// ------ FOR .... IN
const passengers = [
    "Will Alexander",
    "Sarah Kate'",
    "Audrey Simon",
    "Tao Perkington"
]

for (let i in passengers) {
    console.log("Embarquement du passager " + passengers[i]);
} // Embarquement du passager 0 /  Embarquement du passager 1 /  Embarquement du passager 2...

// ------ FOR ..... OF
for (let passenger of passengers) {
    console.log("Embarquement du passager " + passenger);
} // Embarquement du passager Will Alexander /  Embarquement du passager Sarah Kate /  Embarquement du passager Audrey Simon...

// Exemple plus complexe
const passengers = [
    {
        name: "Will Alexander",
        ticketNumber: 209542
    },

    {
        name: "Sarah Kate",
        ticketNumber: 169336
    },

    {
        name: "Audrey Simon",
        ticketNumber: 779042
    },

    {
        name: "Tao Perkington",
        ticketNumber: 703911
    }
]

for (let passenger of passengers) {
    console.log('Embarquement du passager ' + passenger.name + ' avec le ticket numéro ' + passenger.ticketNumber);
} // Embarquement du passager Will Alexander avec le ticket 209542 ... 

// ------ WHILE (Si une condition est vraie, sinon la boucle s'arrête)
let seatsLeft = 10;
let passengersStillToBoard = 8;
let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0) {
    passengersBoarded++; // un passager embarque
    passengersStillToBoard--; // donc il y a un passager de moins à embarquer
    seatsLeft--; // et un siège de moins
}

console.log(passengersBoarded); // imprime 8, car il y a 8 passagers pour 10 sièges

// ==========================================
// 08 JAVASCRIPT COTE NAVIGATEUR
// ==========================================

// Séparer le javascript de la page dans fichiers .js
// Appeler les fichiers dans la partie HEAD ou juste avant la fermeture du BODY
// Chargement de la balise javascript = <script type="text/javascript" src="app.js"></script>

// Proprité Window
console.log(window) // Récupération de l'objet Window avec toutes les propriétées embarquées

// Exemple de fonction window
// ----- Alert

window.alert("Salut les gens") // Affiche un bloc avec le message sur la page en question

// ------ Prompt
var demo = window.prompt("Entrez une valeur entre 1 et 10")
console.log(demo) // retourne la valeur entrée par l'utilisateur


// ------ Confirm // fenêtre de confirmation
var confirmation = window.confirm("Accepter ou refuser")
console.log(confirmation) // Retourne la valeur true (ok) ou false (annuler)

// ==========================================
// 09 LE DOM
// ==========================================

// document
document.getElementById('Your id')
document.getElementsByClassName('Your Class')