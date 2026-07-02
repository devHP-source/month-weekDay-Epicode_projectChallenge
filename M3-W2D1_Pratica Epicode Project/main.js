const ALBUM_DATA = [
  {
    title: "Tunay",
    artist: "Zack Tabudlo",
    genre: "Hip-Hop / Pop",
    type: "Single",
    length: "3:45",
    coverUrl: "./assets/TUNAY-albumCover.jpg"
  },
  {
    title: "Episode",
    artist: "Zack Tabudlo",
    genre: "Pop / R&B",
    type: "Album",
    length: "54 mins",
    coverUrl: "./assets/EPISODE-albumCover.png"
  },
  {
    title: "3rd Time's a Charm",
    artist: "Zack Tabudlo",
    genre: "Alt-Pop / Indie",
    type: "Album",
    length: "48 mins",
    coverUrl: "./assets/3rd TIME'S A CHARM-albumCover.jpg"
  },
  {
    title: "Fallin",
    artist: "Zack Tabudlo ft. Nasty C",
    genre: "R&B / Soul",
    type: "Single",
    length: "3:15",
    coverUrl: "./assets/FALLIN-albumCover.jpg"
  },
  {
    title: "Binibini",
    artist: "Zack Tabudlo",
    genre: "Pop / Romance",
    type: "Single",
    length: "3:41",
    coverUrl: "./assets/BINIBINI-albumCover.jpg"
  }
];

function specialChar(str) { // Funzione per sostituire caratteri speciali
  return str.replace(/'/g, "&#39;").replace(/"/g, "&quot;"); // l'apostrofo e virgolette doppie
}

/* document.addEventListener("DOMContentLoaded", () => { 
  renderAlbumGrid(ALBUM_DATA);
}); */


/* ES 1: Renderizzare la griglia degli album */
function renderAlbumGrid(items) {
  const targetGridContainer = document.getElementById("album-grid-container");
  
if (!targetGridContainer) return;

let builtMarkupString = "";

  items.forEach(item => {

    const safeChar = specialChar(item.title); 

    builtMarkupString += `
      <div class="col-6 col-md-4 col-xl-3">
        <div class="card h-100 album-card text-light">
          
          <div class="card-img-container mb-3">
            <img src="${item.coverUrl}" class="card-img-top" alt="${safeChar} Cover Graphic">
          </div>
          
          <div class="card-body p-0 d-flex flex-column justify-content-between">
            <div class="mb-2">
              <h6 class="card-title text-truncate fw-bold mb-1 text-white" title="${safeChar}">${item.title}</h6>
              <p class="card-text custom-muted-text small mb-0 text-truncate">${item.artist}</p>
            </div>
            
            <div class="pt-2 mt-1 border-top border-secondary-subtle">
              <div class="d-flex justify-content-between align-items-center" style="font-size: 0.75rem;">
                <span class="custom-muted-text text-truncate me-2">🎧 ${item.genre}</span>
                <span class="badge bg-dark border border-secondary text-white px-2 py-1" style="font-size: 0.65rem; font-weight: 500;">${item.length}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;
  });

  targetGridContainer.innerHTML = builtMarkupString;
}

document.addEventListener("DOMContentLoaded", () => {

  renderAlbumGrid(ALBUM_DATA); // Garantisce che HTML è completamente caricato prima di eseguire qualsiasi manipolazione DOM


  const toggleBtn = document.getElementById("toggle-favorites-btn");
  const containerWrap = document.getElementById("favorites-collapse-wrapper");
  const textNode = document.getElementById("btn-text-node");
  const iconNode = document.getElementById("btn-icon-node");
  const favoritesNavLink = document.getElementById("nav-link-favorites");
  const spotlightNavLink = document.getElementById("nav-link-spotlight");

    if (toggleBtn && containerWrap && textNode && iconNode) {
      toggleBtn.addEventListener("click", () => {
          containerWrap.classList.toggle("is-hidden");

            if (containerWrap.classList.contains("is-hidden")) {
              textNode.textContent = "Show Collection";
              iconNode.setAttribute("name", "eye-off-outline"); // STATUS TARGET: HIDDEN (Swap to eye-off)
            } else {
                textNode.textContent = "Hide Collection";
                iconNode.setAttribute("name", "eye-outline"); // STATUS TARGET: VISIBLE (Swap to regular eye)
            
                  if (spotlightNavLink) spotlightNavLink.classList.remove("active"); 
                  if (favoritesNavLink) favoritesNavLink.classList.add("active"); // auto-focus navbar highlight on Favorites section when toggled open
            }
          setTimeout(() => {
            const scrollSpyInstance = bootstrap.ScrollSpy.getInstance(document.body);
              if (scrollSpyInstance) {
              scrollSpyInstance.refresh();
          }
        }, 510); // 510ms delay
    });
  }
});