/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"          title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o
minuscole nelle parole cercate).
Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

/* PARTE 1: VERSION 1 */
/* 
const inputTitle = document.getElementById('title');
const inputLocation = document.getElementById('location');
const form = document.querySelector('form');
const table = document.getElementById('table');


function searchJob(title, location) {

  const inputTitle = title.toLowerCase();
  const inputLocation = location.toLowerCase();
  let result = [];

    for (const job of jobs) {
      const normaJobTitle = job.title.toLocaleLowerCase();
      const normaJobLocation = job.title.toLocaleLowerCase();

      if (normaJobTitle.includes(inputTitle) && normaJobLocation.includes(inputLocation)) {
        result.push(job)
      }
    }

return {
  result,
  count: result.length
  }
}


/* Aggiunge un TR, con dentro TD e valore "valore e location"
* Creare un TR
* Creare TD
//
function addResultTableRow(title, location) {
  const tr = document.createElement('tr'); // crea un TR
  const titleTD = document.createElement('td'); // crea un TD
  const locationTD = document.createElement('td'); // crea un TD

  titleTD.innerText = title;
  locationTD.innerText = location;

  tr.append(titleTD, locationTD); // append(): più elementi | appendChild: solo un elemento
  tr.setAttribute('class', 'newRow')
  table.appendChild(tr)
}

// Recupera i valori, scritte sull'input
function getInputValue() {
  return {
    title: inputTitle.value,
    location: inputLocation.value
  }
}

function generateEmpthyMessage() {
  const div = document.createElement('div');
  div.innerText = ('No Job Result')
  table.appendChild(div)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  // console.log( e )
  const inputValue = getInputValue()
  const searchResult = searchJob(inputValue.title, inputValue.location)

  const rows = document.querySelectorAll('.newRow'); // produce array di elementi

  for (const row of rows) {
    row.remove()
  }

  if (searchResult.count > 0) {
    for (const item of searchResult.result) {
      addResultTableRow(item.title, item.location)
    } 
  } else {
    generateEmpthyMessage()
  }
})
*/


/* PART 1: VERSION 2 */
function searchJob(searchTitle, searchLocation) { // Search function
  const inputTitle = searchTitle.toLowerCase(); //case sensitive for Title
  const inputLocation = searchLocation.toLowerCase(); //case sensitive for Location

  let searchResults = { // Oggetto come richiesto
    result: [],
    count: 0
  };

  for(let i = 0; i < jobs.length; i++) { // ciclo FOR per scorrere l'array JOBS
    const currentJob = jobs[i];
    const jobTitle = currentJob.title.toLowerCase();
    const jobLoc = currentJob.location.toLowerCase();

    if (jobTitle.includes(inputTitle) && jobLoc.includes(inputLocation)) { // Verifica entrambi i parametri
      searchResults.result.push(currentJob);
      searchResults.count++;
    }
  }
return searchResults;
}

const searchButton = document.getElementById('searchBtn'); // riga 70: HTML

searchButton.onclick = function() {
  const inputJob = document.getElementById('jobTitle').value;
  const inputLoc = document.getElementById('location').value;
  const tableBody = document.getElementById('resultsBody');

  tableBody.innerHTML = ""; // toglie la tabella

  if (inputJob === "" && inputLoc === "") {
    tableBody.innerHTML = '<tr><td colspan="2" class="placeholder-cell">Compila i campi vuoti</td></tr>';
  return;
  }

  const finalSearch = searchJob(inputJob, inputLoc);

  if (finalSearch.count === 0) {
    tableBody.innerHTML = '<tr><td colspan="2" class="placeholder-cell">No data has been found.</td></tr>';
  } else {
    for (let j = 0; j < finalSearch.result.length; j++) { // Visualizzazione sui risultati nel DOM
      const matchResult = finalSearch.result[j];
      const row = document.createElement('tr');

      row.className = "animate-row"; // riga 135: CSS Animation

      row.innerHTML = "<td>" + matchResult.title + "</td><td>" + matchResult.location + "</td>";
      tableBody.appendChild(row);
    }
  }
}
