const BASE_URL = "https://striveschool-api.herokuapp.com/books";

let cartTotal = 0; // running sum of every book we add to the cart
let books = []; // the full catalogue, kept around so the sidebar search can filter it


const toggleAlert = () => { // red banner when the fetch() fails
  document.getElementById("errorAlert").classList.remove("d-none");
};

const toggleSpinner = (visible) => { // shows the bootstrap spinner and hides when fetch() is done
  document.getElementById("spinner").classList.toggle("d-none", !visible);
};

const addToCart = (price) => { // adds the books price in the cart and updates the total
  cartTotal += price;
  document.getElementById("cartTotal").textContent = cartTotal.toFixed(2);
};

const buildCard = (book) => { // card has cover, title, price and three buttons: add to cart, skip, details
  const col = document.createElement("div");
  col.className = "col";

  // the whole card is a link to the details page
  const link = document.createElement("a");
  link.className = "text-decoration-none d-block h-100";
  link.href = `./dettagli.html?id=${book.asin}`;

  const card = document.createElement("div");
  card.className = "card h-100";

  const cover = document.createElement("img");
  cover.className = "card-img-top book-cover";
  cover.setAttribute("src", book.img);
  cover.setAttribute("alt", book.title);

  const body = document.createElement("div");
  body.className = "card-body d-flex flex-column";

  const title = document.createElement("h6");
  title.className = "card-title";
  title.textContent = book.title;

  const price = document.createElement("p");
  price.className = "fw-bold mb-3";
  price.textContent = `${book.price} €`;

  const actions = document.createElement("div"); // cards 3 buttons
  actions.className = "mt-auto d-flex flex-column gap-2";

  const cartButton = document.createElement("button");
  cartButton.className = "btn btn-primary btn-sm";
  cartButton.textContent = "Add to cart";
  // stop the card link from firing when we only want to add to the cart
  cartButton.addEventListener("click", (e) => {
    e.preventDefault();
    addToCart(book.price);
  });

  const skipButton = document.createElement("button"); // skip = remove the card
  skipButton.className = "btn btn-outline-light btn-sm";
  skipButton.textContent = "Skip";
  // same here: removing the card should not navigate away
  skipButton.addEventListener("click", (e) => {
    e.preventDefault();
    col.remove();
  });

  const detailsLink = document.createElement("a"); // details page will read the asin from the URL and fetch that single book
  detailsLink.className = "btn btn-outline-light btn-sm";
  detailsLink.textContent = "Details";
  detailsLink.setAttribute("href", `./dettagli.html?id=${book.asin}`);

  actions.append(cartButton, skipButton, detailsLink);
  body.append(title, price, actions);
  card.appendChild(cover);
  card.appendChild(body);
  link.appendChild(card);
  col.appendChild(link);
  document.getElementById("bookList").appendChild(col);
};

// clear the grid and draw the given list of books
const renderBooks = (list) => { 
  const grid = document.getElementById("bookList");
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  list.forEach(buildCard);
};

const filterBooks = () => { // fa vedere cosa tu hai scritto (cercato) nella barra di ricerca con filter()
  const query = document.getElementById("searchField").value.trim().toLowerCase();
  const matches = books.filter((book) => book.title.toLowerCase().includes(query));
  renderBooks(matches);
};

const getBooks = async () => { // fetch() the catalogue, store it in books and render it
  toggleSpinner(true);
  try {
    const response = await fetch(BASE_URL);
    books = await response.json();
    renderBooks(books);
  } catch (e) {
    toggleAlert();
    console.error(e);
  } finally {
    toggleSpinner(false);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  getBooks();
  document.getElementById("button-search").addEventListener("click", filterBooks);
  document.getElementById("searchField").addEventListener("keydown", (e) => {
    if (e.key === "Enter") filterBooks();
  });
});
