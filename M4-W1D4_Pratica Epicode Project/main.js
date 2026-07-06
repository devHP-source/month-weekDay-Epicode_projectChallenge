const BASE_URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const homeArtists = [ // The three artists the homepage shows
  {
    query: "eminem",
    section: "eminem",
    list: "eminemSection"
  },
  {
    query: "metallica",
    section: "metallica",
    list: "metallicaSection"
  },
  {
    query: "queen",
    section: "queen",
    list: "queenSection"
  }
];

let loadedTracks = []; // Every track we fetch ends up at "Create List"

document.addEventListener("DOMContentLoaded", () => {
  homeArtists.forEach(loadArtist);

  document.getElementById("button-search").addEventListener("click", search);
  document.getElementById("searchField").addEventListener("keydown", (e) => {
    if (e.key === "Enter") search();
  });
  document.getElementById("createListBtn").addEventListener("click", showAlbumList);
});

function loadArtist(artist) {
  fetch(BASE_URL + artist.query)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("Request for " + artist.query + " failed:", response.status);
      }
    })
    .then((result) => {
      try {
        console.log(artist.query, result.data);
        loadedTracks = loadedTracks.concat(result.data);
        renderTracks(result.data, artist.list);
        document.getElementById(artist.section).classList.remove("d-none");
      } catch (error) {
        console.log(error);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function search() {
  const query = document.getElementById("searchField").value.trim();
  if (!query) {
    return;
  }

  fetch(BASE_URL + query)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("Search request failed:", response.status);
      }
    })
    .then((result) => {
      try {
        console.log("search:", query, result.data);

        const found = document.getElementById("found");
        found.querySelector("h2").textContent = `Search results for "${query}"`;

        if (result.data.length > 0) {
          renderTracks(result.data, "searchSection");
          loadedTracks = loadedTracks.concat(result.data);
        } else {
          document.getElementById("searchSection").innerHTML =
            '<p class="artist-name">No tracks found.</p>';
        }
        found.classList.remove("d-none");
      } catch (error) {
        console.log(error);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function renderTracks(tracks, listId) {
  document.getElementById(listId).innerHTML = tracks.map(trackCard).join("");
}

function trackCard(track) {
  return `
    <div class="col mb-4">
      <a href="${track.link}" target="_blank" rel="noopener">
        <img src="${track.album.cover_medium}" alt="${track.title}" />
        <p class="mb-0">${track.title}</p>
      </a>
      <span class="artist-name d-block">${track.artist.name}</span>
    </div>`;
}

/* Collects the album titles and fill the modal, using Bootstrap Modal
tramite data-bs-toggle attributes at the button, we only build the list here */
function showAlbumList() {
  const titles = [];
  loadedTracks.forEach((track) => {
    if (!titles.includes(track.album.title)) {
      titles.push(track.album.title);
    }
  });
  titles.sort();

  const body = document.getElementById("albumListBody");
  if (titles.length > 0) {
    body.innerHTML = titles
      .map((title) => `<li class="list-group-item">${title}</li>`)
      .join("");
  } else {
    body.innerHTML = '<li class="list-group-item">Nothing loaded yet.</li>';
  }
}
