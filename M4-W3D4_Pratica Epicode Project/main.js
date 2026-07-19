const API_URL = "https://jsonplaceholder.typicode.com/users"; // endpoint

let users = [];
let activeField = "name";


const table = document.getElementById("usersTable");
const tableBody = document.getElementById("usersTableBody");
const searchInput = document.getElementById("searchInput");
const dropdownButton = document.getElementById("filterFieldDropdown");
const dropdownItems = document.querySelectorAll(".dropdown-item");
const loadingState = document.getElementById("loadingState");
const errorState = document.getElementById("errorState");
const resultsCount = document.getElementById("resultsCount");

const buildRow = (user) => { // costruzione della riga della tabella per ogni users
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td><a href="mailto:${user.email}">${user.email}</a></td>
        <td>${user.phone}</td>
        <td><a href="http://${user.website}" target="_blank" rel="noopener">${user.website}</a></td>
        <td>${user.company.name}</td>
    `;
    return row;
};

const renderUsers = (list) => { // render della tabella con i dati filtrati
    tableBody.innerHTML = "";

    resultsCount.textContent = `${list.length} utenti trovati`;
    resultsCount.classList.remove("d-none");

    if (list.length === 0) { // se non ci sono result, appare questo
        const emptyRow = document.createElement("tr");
        emptyRow.className = "empty-row";
        emptyRow.innerHTML = `<td colspan="7">Nessun utente corrisponde alla ricerca</td>`;
        tableBody.appendChild(emptyRow);
        return;
    }

    list.forEach((user) => tableBody.appendChild(buildRow(user)));
};

const filterUsers = () => { // funzione che filtra gli utenti in base al campo selezionato e al testo digitato
    const query = searchInput.value.trim().toLowerCase();

    const matches = users.filter((user) => {

        const fieldValue = String(user[activeField]).toLowerCase();
        return fieldValue.includes(query);
    });

    renderUsers(matches);
};

const loadUsers = async () => { // funzione ASYNC per caricare gli utenti dall'API
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`La richiesta è fallita (codice ${response.status})`);
        }

        users = await response.json();
        renderUsers(users);
        table.classList.remove("d-none");
    } catch (error) {
        errorState.textContent = `Impossibile caricare gli utenti: ${error.message}`;
        errorState.classList.remove("d-none");
    } finally {
        loadingState.classList.add("d-none"); // nascondo lo spinner
    }
};

// Filtra mentre l'utente scrive
searchInput.addEventListener("input", filterUsers); // addEventListener all'input di ricerca per filtrare gli utenti in tempo reale

dropdownItems.forEach((item) => { // addEventListener per ogni dropdown per cambiare il campo attivo e filtrare gli utenti
    item.addEventListener("click", () => {
        activeField = item.dataset.field;
        dropdownButton.textContent = item.textContent;

        dropdownItems.forEach((option) => option.classList.remove("active")); // rimuovo la classe "active" da tutte le voci del dropdown
        item.classList.add("active");

        filterUsers();
    });
});
loadUsers();