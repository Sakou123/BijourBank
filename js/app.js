let operationsCompte = [];
operationsCompte.push(["+", "salaire", 1520]);
operationsCompte.push(["-", "achat PS4", 499.99]);
operationsCompte.push(["-", "achat TV", 599]);

let OperationsDebit = []
OperationsDebit.push(["achat PS4", 499.99])
OperationsDebit.push(["achat TV", 599])

// on déclare nos variables
let solde = 0;
let operator = "";
let devise = "€";

let totalAccount = document.getElementById('total');

let credit = document.getElementById('detailsCredit')
let debit = document.getElementById('detailsDebit')
let totalCredit = document.getElementById('totalCredit')
let totalDebit = document.getElementById('totalDebit')

let audio = new Audio('/sound/stonks.mp3');

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// send form, add operation
const formulaire = document.getElementById("ajoutOperation");
formulaire.addEventListener("submit", function (e) {
    e.preventDefault();
    // on récupère les valeurs des champs du formulaire
    let operateur = document.getElementById('operation').value
    let libelle = document.getElementById('intitule').value
    let montant = parseFloat(document.getElementById('montant').value)
    // on stocke ces valeurs dans un array[]
    let arrayOperations = [operateur,libelle,montant]

    // on ajoute cet array dans notre array global operationsCompte
    operationsCompte.push(arrayOperations);

    let creditTot = 0
    let debitTot = 0
    
    operationsCompte.forEach(element => {
      if(element[0]=='+'){
        creditTot = creditTot + element[2];
      } else {
        debitTot = debitTot + element[2];
      }
    });

    if (operateur == '+'){
      let NewLi = document.createElement('li');
      NewLi.innerHTML = "<span class='intitule'>"+capitalize(libelle)+"</span><span class='montant txt-color-gazoil'>"+montant+" "+devise+"</span>";
      credit.appendChild(NewLi);
      // if (montant>1000){                           /* STONKS */
      //   audio.play();
      // }
    } 
    if (operateur == '-'){
      // OperationsDebit.push([libelle, montant]);
      // console.log(OperationsDebit);
      // debit.innerHTML = '';
      // OperationsDebit.forEach(element => {
      //   let NewLi = document.createElement('li');
      //   NewLi.innerHTML = "<span class='intitule'>"+capitalize(element[0])+"</span><span class='montant txt-color-red'>"+element[1]+" "+devise+"</span><span class='percent txt-color-red'>"+Math.round(element[1]/debitTot*10000)/100+"%</span>";
      //   debit.appendChild(NewLi);
      // });
      let NewLi = document.createElement('li');
      NewLi.innerHTML = "<span class='intitule'>"+capitalize(libelle)+"</span><span class='montant txt-color-red'>"+montant+" "+devise+"</span><span class='percent txt-color-red'>"+(montant/debitTot*100).toFixed(2)+"%</span>";
      debit.appendChild(NewLi);
    }
  let AccountTot = creditTot-debitTot

  totalCredit.innerHTML = " "+creditTot+" "+devise;
  totalDebit.innerHTML = " "+debitTot+" "+devise+"<span class='percent txt-color-red'>"+(debitTot/creditTot*100).toFixed(2)+"%</span>";

  totalAccount.innerHTML = " "+Math.round(AccountTot*100)/100+" "+devise;       // Round AccountTot

  if (AccountTot<0){
    totalAccount.style.color = "red";
    totalAccount.style.fontSize = "3.5rem"
    totalAccount.innerHTML = "⚠ "+Math.round(AccountTot*100)/100+" "+devise;
  } else {
    totalAccount.style.color = "white";
    totalAccount.style.fontSize = "2.5rem"
  }

    // on reset le formulaire
    formulaire.reset();
});

