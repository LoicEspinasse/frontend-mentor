// Les variables ne peuvent contenir des caractères spéciaux
var nombre = 2
var chaine_caractere = 'salut les gens'

// Les types de variables 
// -- Les nombres
var a = 2
var b = 3.4123
var c = -509
var d = 1 / 3

// -- Les chaines de caractères
var e = "Salut les gens"
var f = "Re-Salut les gens !"
// --- Attention au double et simple quote (Identique PHP)
var g = "Ce n\'est pas une problématique"

// -- Les Boléens
var vrai = true
var faux = false

// -- les tableaux
var eleves = ['Jean', 'Marc', 'Marion']
var demo = [true, 10, 'Marc']
// --- Affichage
eleves[0] // Jean
eleves[2] // Marion 
demo[1] // 10

// -- Les objets
var eleve = {
    id: 2,
    name: 'Jean',
    age: 18,
    notes: [10, 12, 8]
}
// --- Affichage

eleve.name // Jean
eleve.age // 18 
eleve.notes[1] // 12
