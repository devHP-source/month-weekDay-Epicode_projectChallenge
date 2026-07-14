const apiKey = "DOEfF3wHS5K8iGu6CqhROWnBSg6kgUjTDEN6qaFBk2ndrFaKORABTyUI";
const endpoint = "https://api.pexels.com/v1/search";

const topics = ["Nature", "City", "Coffee", "Animals", "Architecture", "Ocean", "Travel", "Food"];
const randomQueries = [
    "Sunset", "Tokyo", "Jellyfish", "Desert",
    "Autumn", "Waterfall", "Street food", "Bicycles",
    "Snow", "Library", "Lighthouse", "Neon",
    "Vintage cars", "Bees", "Surfing", "Markets", "LC L300"
];

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const gallery = document.getElementById("gallery");
const summary = document.getElementById("summary");
const spinner = document.getElementById("spinner");
const errorBox = document.getElementById("error");
const suggestions = document.getElementById("suggestions");
const emptyState = document.getElementById("empty-state");
const emptyMessage = document.getElementById("empty-message");
const randomButton = document.getElementById("random-button");

let loading = false;

const searchPhotos = async (query) => {
    const address = endpoint + "?query=" + encodeURIComponent(query) + "&per_page=24";

    try {
        const response = await fetch(address, {
            headers: {
                Authorization: apiKey
            }
        });

        if (!response.ok) {
            console.error("Pexels replied with " + response.status);
            return null;
        }

        const results = await response.json();
        return results.photos;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const countPhotographers = (photos) =>
    photos.reduce((names, photo) => (
        names.includes(photo.photographer)
        ? names
        : [...names, photo.photographer]
    ), []).length;

const pluralize = (count, word) => count + " " + word + (count === 1 ? "" : "s");


const escapeQuotes = (text) => text.split('"').join("&quot;"); // per evitare doppie virgolette per evitare la chiusura anticipata dell'attributo

const buildCard = (photo) =>
    '<div class="col">' +
        '<div class="card h-100 border-0 shadow-sm">' +
            '<img src="' + photo.src.large + '" class="card-img-top" alt="' + escapeQuotes(photo.alt) + '" loading="lazy">' +
            '<div class="card-body d-flex flex-column">' +
                '<h5 class="card-title mb-1">' + photo.photographer + '</h5>' +
                '<p class="card-text text-muted small mb-3">' + photo.width + ' &times; ' + photo.height + '</p>' +
                '<a href="' + photo.url + '" class="btn btn-sm btn-outline-dark mt-auto" target="_blank" rel="noopener">View on Pexels</a>' +
            '</div>' +
        '</div>' +
    '</div>';


const revealImage = (event) => event.target.classList.add("visible"); // se la carica non si carica, non si blocca il caricamento delle altre immagini, quindi si rivela comunque l'immagine anche se non si carica

const renderGallery = (photos) => {
    gallery.innerHTML = photos.map(buildCard).join("");

    gallery.querySelectorAll("img").forEach((image) => {
        image.addEventListener("load", revealImage);
        image.addEventListener("error", revealImage);
    });
};

const pickRandom = (list) => list[Math.floor(Math.random() * list.length)];

const showEmptyState = (message) => { // "Nothing searched yet or no photos found"
    emptyMessage.textContent = message;
    emptyState.classList.remove("d-none");
};

const showResults = async (query) => {
    loading = true;
    emptyState.classList.add("d-none");
    spinner.classList.remove("d-none");
    errorBox.classList.add("d-none");
    gallery.innerHTML = "";
    summary.textContent = "";

    const photos = await searchPhotos(query);

    loading = false;
    spinner.classList.add("d-none");

    if (!photos) {
        errorBox.textContent = "Could not load the photos. Please try again.";
        errorBox.classList.remove("d-none");
        showEmptyState("Nothing to show.");
        return;
    }

    const usable = photos.filter((photo) => photo.src && photo.src.large);

    if (usable.length === 0) {
        showEmptyState('No photos found for "' + query + '". Try another one.');
        return;
    }

    renderGallery(usable);
    summary.textContent = pluralize(usable.length, "photo") + " from " +
        pluralize(countPhotographers(usable), "photographer") + ' for "' + query + '".';
};

const runSearch = (query) => {
    if (query && !loading) {
        showResults(query);
    }
};

const buildSuggestion = (topic) =>
    '<li><button type="button" class="dropdown-item">' + topic + '</button></li>';

const hideSuggestions = () => suggestions.classList.remove("show");

const renderSuggestions = (matches) => {
    if (matches.length === 0) {
        hideSuggestions();
        return;
    }

    suggestions.innerHTML = matches.map(buildSuggestion).join("");
    suggestions.classList.add("show");

    suggestions.querySelectorAll(".dropdown-item").forEach((item) => {
        item.addEventListener("click", () => {
            input.value = item.textContent;
            hideSuggestions();
            runSearch(item.textContent);
        });
    });
};

input.addEventListener("focus", () => renderSuggestions(topics)); // onFocus on searchbar, shows suggested topics
input.addEventListener("click", () => renderSuggestions(topics));

input.addEventListener("input", () => {
    const typed = input.value.trim().toLowerCase();
    renderSuggestions(topics.filter((topic) => topic.toLowerCase().includes(typed)));
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        hideSuggestions();
    }
});

document.addEventListener("click", (event) => { // Chiude i suggerimenti SOLO se il click fuori dalla barra di ricerca né dentro il menu
    if (event.target !== input && !suggestions.contains(event.target)) {
        hideSuggestions();
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    hideSuggestions();
    runSearch(input.value.trim());
});

randomButton.addEventListener("click", () => {
    const query = pickRandom(randomQueries);

    input.value = query;
    runSearch(query);
});
