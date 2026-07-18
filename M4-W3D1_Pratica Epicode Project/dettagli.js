const DETAIL_URL = "https://striveschool-api.herokuapp.com/books/";

const toggleAlert = () => {
  document.getElementById("errorAlert").classList.remove("d-none");
};

const toggleSpinner = (visible) => {
  document.getElementById("spinner").classList.toggle("d-none", !visible);
};

const showBook = (book) => { 
  document.title = book.title;

  const imageCol = document.createElement("div");
  imageCol.className = "col-12 col-md-5";

  const cover = document.createElement("img");
  cover.className = "img-fluid rounded";
  cover.setAttribute("src", book.img);
  cover.setAttribute("alt", book.title);
  imageCol.appendChild(cover);

  const infoCol = document.createElement("div");
  infoCol.className = "col-12 col-md-7";

  const title = document.createElement("h1");
  title.className = "h3 mb-3 text-white";
  title.textContent = book.title;

  const category = document.createElement("p");
  category.className = "text-white-50 text-capitalize";
  category.textContent = book.category;

  const price = document.createElement("p");
  price.className = "fs-4 fw-bold text-white";
  price.textContent = `${book.price} €`;

  const asin = document.createElement("p");
  asin.className = "text-white-50";
  asin.textContent = `ASIN: ${book.asin}`;

  infoCol.append(title, category, price, asin);

  const container = document.getElementById("bookDetail");
  container.appendChild(imageCol);
  container.appendChild(infoCol);
};

const getBook = async () => { // fetch the book ASIN from the URL
  toggleSpinner(true);
  try {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    const response = await fetch(`${DETAIL_URL}${id}`);
    const book = await response.json();
    showBook(book);
  } catch (e) {
    toggleAlert();
    console.error(e);
  } finally {
    toggleSpinner(false);
  }
};

document.addEventListener("DOMContentLoaded", getBook);
