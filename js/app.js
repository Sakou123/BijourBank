// import { user } from "./user.js";

// console.dir(user);

// console.log(
//   `hello ${user.firstname}, i know your password :-) ${user.password}`
// );

// document.querySelector("#firstname").textContent = user.firstname;

// on stocke toutes les opérations de compte dans un array[]
let operationsCompte = [
  // exemples
  // ["+", "salaire", 1520],
  // ["-", "achat PS4", 499.99],
  // ["-", "achat TV", 599],
];
// on déclare nos variables
let solde = 0;
let operator = "";
let devise = "€";

function calcul(operateur, libelle, montant) {}
// on execute la function
// calcul();

// send form, add operation
const formulaire = document.getElementById("ajoutOperation");
formulaire.addEventListener("submit", function (e) {
  e.preventDefault();
  // on récupère les valeurs des champs du formulaire
  let credit = document.querySelector('[valeur=credit]')
  let debit = document.querySelector('[valeur=debit]')
  let textForm = document.getElementById('intitule').textContent.value
  let montant = document.getElementById('montant').textContent.value
  console.table(credit);
  console.table(debit);
  console.table(textForm);
  console.table(montant);
  // on stocke ces valeurs dans un array[]
  let arrayOperations = [credit,debit,textForm,montant]
  // on ajoute cet array dans notre array global operationsCompte
  operationsCompte += arrayOperations
  console.table(operationsCompte);
  // on execute la fonction pour actualiser

  // on reset le formulaire
  formulaire.reset();
});
