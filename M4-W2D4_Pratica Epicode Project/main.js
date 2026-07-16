const url = "https://striveschool-api.herokuapp.com/books"; // endpoint

// stato
let allBooks = []; // tutti i libri dell'api
let cart = []; // i libri aggiunti al carrello
let skipped = []; // gli asin dei libri scartati


const booksRow = document.getElementById("booksRow");
const booksStatus = document.getElementById("booksStatus");
const searchInput = document.getElementById("searchInput");
const cartList = document.getElementById("cartList");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const emptyCartBtn = document.getElementById("emptyCartBtn");

getBooks(); // carico i libri quando si apre la pagina

async function getBooks() {
  booksStatus.textContent = "Loading books...";
  try {
    const res = await fetch(url);
    if (!res.ok) { // se la risposta non è OK
      booksStatus.className = "text-danger mb-3";
      booksStatus.textContent = "Something went wrong while loading the books. Try refreshing the page.";
      return;
    }
    allBooks = await res.json();
    showBooks();
    showCart();
  } catch (err) { // mostra il messaggio di errore
    console.log(err);
    booksStatus.className = "text-danger mb-3";
    booksStatus.textContent = "Something went wrong while loading the books. Try refreshing the page.";
  }
}

function showBooks() { // card/books tenendo conto della ricerca e dei libri scartati
  const search = searchInput.value.trim().toLowerCase();


  let books = allBooks.filter((book) => !skipped.includes(book.asin)); // parto da tutti i libri, tolti quelli scartati


  if (search.length > 3) { // filtro SOLO quando l'utente ha scritto più di 3 lettere
    books = books.filter((book) => book.title.toLowerCase().includes(search));
  }

  if (books.length === 0) {
    booksRow.innerHTML = "";
    booksStatus.className = "text-muted small mb-3";
    booksStatus.textContent = "No books found.";
    return;
  }

  booksStatus.textContent = books.length === 1
    ? "Showing 1 book."
    : "Showing " + books.length + " books.";

  booksRow.innerHTML = books
    .map((book) => {
      const added = isInCart(book.asin);
      return `
        <div class="col">
          <div class="card book-card h-100 ${added ? "border-success border-2" : ""}">
            <img src="${book.img}" class="card-img-top book-cover" alt="${book.title}" loading="lazy">
            <div class="card-body d-flex flex-column">
              ${added ? `<span class="badge bg-success align-self-start mb-2"><ion-icon name="checkmark-outline"></ion-icon> In cart</span>` : ""}
              <h6 class="card-title">${book.title}</h6>
              <p class="card-text text-muted mb-2">€${formatPrice(book.price)}</p>
              <div class="d-grid gap-2 mt-auto">
                <button class="btn btn-primary btn-sm" data-action="add" data-asin="${book.asin}" ${added ? "disabled" : ""}>
                  ${added ? `<ion-icon name="checkmark-outline"></ion-icon> Added` : `<ion-icon name="cart-outline"></ion-icon> Add to cart`}
                </button>
                <button class="btn btn-outline-secondary btn-sm" data-action="skip" data-asin="${book.asin}">
                  <ion-icon name="eye-off-outline"></ion-icon> Skip
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function showCart() { // carrello: numeri di articoli, totale e lista
  cartCount.textContent = cart.length;

  const total = cart.reduce((sum, book) => sum + book.price, 0);
  cartTotal.textContent = "€" + formatPrice(total);

  emptyCartBtn.disabled = cart.length === 0;

  if (cart.length === 0) {
    cartList.innerHTML = `<li class="list-group-item text-muted text-center">Your cart is empty.</li>`;
    return;
  }

  cartList.innerHTML = cart
    .map((book) => {
      return `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div class="me-2 text-truncate">
            <div class="text-truncate">${book.title}</div>
            <small class="text-muted">€${formatPrice(book.price)}</small>
          </div>
          <button class="btn btn-sm btn-outline-danger" data-action="remove" data-asin="${book.asin}" aria-label="Remove"><ion-icon name="close-outline"></ion-icon></button>
        </li>
      `;
    })
    .join("");
}

function addToCart(asin) { // add Cart/Card function e evidenzio la card
  if (isInCart(asin)) return;

  const book = allBooks.find((b) => b.asin === asin);
  if (!book) return;

  cart.push(book);
  showBooks();
  showCart();
}

function removeFromCart(asin) { // remove Book/Card function at cart
  cart = cart.filter((book) => book.asin !== asin);
  showBooks();
  showCart();
}

function skipBook(asin) { // SKIP Book/Card function
  skipped.push(asin);
  showBooks();
}

function emptyCart() { // Empty Cart function
  cart = [];
  showBooks();
  showCart();
}

function isInCart(asin) { // questo libro è già nel carrello
  return cart.some((book) => book.asin === asin);
}

function formatPrice(n) { // trasformo i numeri in un prezzo con due decimali
  const cents = Math.round(n * 100);
  const euro = Math.floor(cents / 100);
  const rest = cents % 100;
  return euro + "." + (rest < 10 
    ? "0" + rest 
    : rest
  )};

booksRow.addEventListener("click", (e) => { // card buttons (add and skip)
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;

  if (btn.dataset.action === "add") {
    addToCart(btn.dataset.asin);
  } else if (btn.dataset.action === "skip") {
    skipBook(btn.dataset.asin);
  }
});

// bottoni per rimuovere dal carrello
cartList.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-action='remove']");
  if (btn) {
    removeFromCart(btn.dataset.asin);
  }
});

emptyCartBtn.addEventListener("click", emptyCart); // svuota il carrello con onClick

searchInput.addEventListener("input", () => { // cerco mentre l'utente scrive
  if (allBooks.length > 0) {
    showBooks(); // solo quando i libri sono già arrivati
  }
});
