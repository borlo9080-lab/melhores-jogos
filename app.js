const categoryIcons = {
  "RPG": "&#9876;", "FPS": "&#127918;", "Aventura": "&#9968;",
  "Puzzle": "&#129528;", "Corrida": "&#128663;", "Estratégia": "&#9822;",
  "Terror": "&#128128;", "Luta": "&#129354;",
};

const categoryColors = {
  "RPG": "#6a3093", "FPS": "#c0392b", "Aventura": "#27ae60",
  "Puzzle": "#2980b9", "Corrida": "#e67e22", "Estratégia": "#8e44ad",
  "Terror": "#2c3e50", "Luta": "#e74c3c",
};

const tierNames = {
  super_fraco: "Super Fraco", fraco: "Fraco", mediano: "Mediano", forte: "Forte",
};

const pcGames = [
  { id: 1, title: "Blox Fruits", cat: "RPG", rate: 9.6, year: 2019, tier: "mediano", img: "https://tr.rbxcdn.com/180DAY-2c1129a448e74940038294483f07d5a6" },
  { id: 2, title: "World // Zero", cat: "RPG", rate: 9.4, year: 2020, tier: "mediano", img: "https://tr.rbxcdn.com/180DAY-2c1129a448e74940038294483f07d5a6" },
  { id: 3, title: "King Legacy", cat: "RPG", rate: 9.3, year: 2021, tier: "mediano", img: "https://tr.rbxcdn.com/180DAY-3acb0f0da8433cb97bb84fe70301c78f" },
  { id: 4, title: "Arcane Odyssey", cat: "RPG", rate: 9.5, year: 2022, tier: "mediano" },
  { id: 5, title: "Swordburst 2", cat: "RPG", rate: 9.1, year: 2018, tier: "mediano" },
  { id: 6, title: "Arsenal", cat: "FPS", rate: 9.5, year: 2016, tier: "mediano", img: "https://tr.rbxcdn.com/180DAY-b9b1d7b305e38c8666fd39852423d926" },
  { id: 7, title: "Phantom Forces", cat: "FPS", rate: 9.4, year: 2015, tier: "forte" },
  { id: 8, title: "Bad Business", cat: "FPS", rate: 9.2, year: 2018, tier: "forte" },
  { id: 9, title: "Counter Blox", cat: "FPS", rate: 9.0, year: 2016, tier: "mediano" },
  { id: 10, title: "Rivals", cat: "FPS", rate: 9.3, year: 2021, tier: "mediano" },
  { id: 11, title: "Adopt Me!", cat: "Aventura", rate: 9.7, year: 2017, tier: "fraco", img: "https://tr.rbxcdn.com/180DAY-dde6e11e92c0fe4e2179eb39843d0ec4" },
  { id: 12, title: "Brookhaven RP", cat: "Aventura", rate: 9.6, year: 2020, tier: "fraco", img: "https://tr.rbxcdn.com/180DAY-dde6e11e92c0fe4e2179eb39843d0ec4" },
  { id: 13, title: "Jailbreak", cat: "Aventura", rate: 9.5, year: 2017, tier: "fraco" },
  { id: 14, title: "Natural Disaster Survival", cat: "Aventura", rate: 9.0, year: 2008, tier: "super_fraco", img: "https://tr.rbxcdn.com/180DAY-2556ccf774bda999220460aeda22dba8" },
  { id: 15, title: "Livetopia", cat: "Aventura", rate: 9.2, year: 2021, tier: "fraco" },
  { id: 16, title: "DOORS", cat: "Puzzle", rate: 9.6, year: 2022, tier: "mediano", img: "https://tr.rbxcdn.com/180DAY-043d0624ed9f1c7e2c4f4c332f820ee8" },
  { id: 17, title: "Escape Room", cat: "Puzzle", rate: 9.2, year: 2019, tier: "fraco" },
  { id: 18, title: "The Maze", cat: "Puzzle", rate: 8.9, year: 2020, tier: "super_fraco" },
  { id: 19, title: "Find the Markers", cat: "Puzzle", rate: 9.0, year: 2022, tier: "fraco", img: "https://tr.rbxcdn.com/180DAY-dde6e11e92c0fe4e2179eb39843d0ec4" },
  { id: 20, title: "The Crossword", cat: "Puzzle", rate: 8.7, year: 2021, tier: "fraco" },
  { id: 21, title: "Driving Empire", cat: "Corrida", rate: 9.4, year: 2019, tier: "mediano", img: "https://tr.rbxcdn.com/180DAY-cc85115bb7b1a4f5a82e977de51e9c53" },
  { id: 22, title: "Vehicle Simulator", cat: "Corrida", rate: 9.3, year: 2017, tier: "fraco", img: "https://tr.rbxcdn.com/180DAY-dde6e11e92c0fe4e2179eb39843d0ec4" },
  { id: 23, title: "Car Crushers 2", cat: "Corrida", rate: 9.1, year: 2018, tier: "fraco" },
  { id: 24, title: "Midnight Racing: Tokyo", cat: "Corrida", rate: 9.0, year: 2022, tier: "mediano" },
  { id: 25, title: "Ultimate Driving", cat: "Corrida", rate: 8.8, year: 2016, tier: "fraco" },
  { id: 26, title: "Tower Defense Simulator", cat: "Estratégia", rate: 9.5, year: 2019, tier: "fraco" },
  { id: 27, title: "BedWars", cat: "Estratégia", rate: 9.4, year: 2020, tier: "mediano", img: "https://tr.rbxcdn.com/180DAY-4fb716609029d3b8f6ffed5c338c713c" },
  { id: 28, title: "Tower Battles", cat: "Estratégia", rate: 9.2, year: 2017, tier: "fraco" },
  { id: 29, title: "Zombie Attack", cat: "Estratégia", rate: 8.9, year: 2015, tier: "super_fraco" },
  { id: 30, title: "Skibi Defense", cat: "Estratégia", rate: 9.0, year: 2023, tier: "mediano" },
  { id: 31, title: "The Mimic", cat: "Terror", rate: 9.5, year: 2021, tier: "mediano", img: "https://tr.rbxcdn.com/180DAY-2556ccf774bda999220460aeda22dba8" },
  { id: 32, title: "Piggy", cat: "Terror", rate: 9.4, year: 2020, tier: "fraco", img: "https://tr.rbxcdn.com/180DAY-2556ccf774bda999220460aeda22dba8" },
  { id: 33, title: "Rainbow Friends", cat: "Terror", rate: 9.3, year: 2022, tier: "fraco" },
  { id: 34, title: "The Rake", cat: "Terror", rate: 8.9, year: 2020, tier: "fraco" },
  { id: 35, title: "Alone", cat: "Terror", rate: 9.0, year: 2021, tier: "fraco" },
  { id: 36, title: "Super Power Fighting Simulator", cat: "Luta", rate: 9.3, year: 2019, tier: "fraco", img: "https://tr.rbxcdn.com/180DAY-4fb716609029d3b8f6ffed5c338c713c" },
  { id: 37, title: "Strongest Punch Simulator", cat: "Luta", rate: 9.1, year: 2020, tier: "fraco" },
  { id: 38, title: "Rumble Quest", cat: "Luta", rate: 9.0, year: 2021, tier: "mediano" },
  { id: 39, title: "Punch Simulator", cat: "Luta", rate: 8.7, year: 2018, tier: "fraco" },
  { id: 40, title: "Sword Fights on the Heights", cat: "Luta", rate: 8.9, year: 2009, tier: "super_fraco" },
];

const mobileGames = [
  { id: 101, title: "Genshin Impact", cat: "RPG", rate: 9.7, year: 2020, img: "https://upload.wikimedia.org/wikipedia/en/9/94/Genshin_Impact_cover_art.jpg" },
  { id: 102, title: "Honkai: Star Rail", cat: "RPG", rate: 9.5, year: 2023, img: "https://upload.wikimedia.org/wikipedia/en/5/5d/Honkai_Star_Rail_cover_art.jpg" },
  { id: 103, title: "Tower of Fantasy", cat: "RPG", rate: 9.1, year: 2022, img: "https://upload.wikimedia.org/wikipedia/en/7/7b/Tower_of_Fantasy_cover_art.jpg" },
  { id: 104, title: "Summoners War", cat: "RPG", rate: 9.0, year: 2014, img: "https://upload.wikimedia.org/wikipedia/en/5/5c/Summoners_War_icon.jpg" },
  { id: 105, title: "Black Desert Mobile", cat: "RPG", rate: 8.9, year: 2019, img: "https://upload.wikimedia.org/wikipedia/en/7/7a/Black_Desert_Online_cover_art.jpg" },
  { id: 106, title: "Call of Duty Mobile", cat: "FPS", rate: 9.5, year: 2019, img: "https://upload.wikimedia.org/wikipedia/en/6/66/Call_of_Duty_Mobile_cover_art.jpg" },
  { id: 107, title: "PUBG Mobile", cat: "FPS", rate: 9.4, year: 2018, img: "https://upload.wikimedia.org/wikipedia/en/5/50/PUBG_Mobile_cover_art.jpg" },
  { id: 108, title: "Free Fire", cat: "FPS", rate: 9.2, year: 2017, img: "https://upload.wikimedia.org/wikipedia/en/3/32/Free_Fire_%28video_game%29_logo.png" },
  { id: 109, title: "Standoff 2", cat: "FPS", rate: 9.0, year: 2018, img: "https://upload.wikimedia.org/wikipedia/en/6/66/Call_of_Duty_Mobile_cover_art.jpg" },
  { id: 110, title: "Modern Combat 5", cat: "FPS", rate: 8.9, year: 2014, img: "https://upload.wikimedia.org/wikipedia/en/b/b2/Modern_Combat_5.jpg" },
  { id: 111, title: "Monument Valley", cat: "Aventura", rate: 9.6, year: 2014, img: "https://upload.wikimedia.org/wikipedia/en/f/f0/Monument_Valley_cover.jpg" },
  { id: 112, title: "Oceanhorn", cat: "Aventura", rate: 9.1, year: 2013, img: "https://upload.wikimedia.org/wikipedia/en/5/5c/Oceanhorn_box_art.jpg" },
  { id: 113, title: "Life is Strange", cat: "Aventura", rate: 9.3, year: 2015, img: "https://upload.wikimedia.org/wikipedia/en/3/34/Life_is_Strange_cover_art.jpg" },
  { id: 114, title: "Grimvalor", cat: "Aventura", rate: 9.0, year: 2018, img: "https://upload.wikimedia.org/wikipedia/en/f/f0/Monument_Valley_cover.jpg" },
  { id: 115, title: "Limbo", cat: "Aventura", rate: 9.2, year: 2010, img: "https://upload.wikimedia.org/wikipedia/en/6/65/Limbo_%28video_game%29_cover.jpg" },
  { id: 116, title: "Candy Crush Saga", cat: "Puzzle", rate: 8.8, year: 2012, img: "https://upload.wikimedia.org/wikipedia/en/6/6d/Candy_Crush_Saga_icon.png" },
  { id: 117, title: "Cut the Rope", cat: "Puzzle", rate: 9.0, year: 2010, img: "https://upload.wikimedia.org/wikipedia/en/b/bf/Cut_the_Rope_icon.png" },
  { id: 118, title: "Two Dots", cat: "Puzzle", rate: 8.7, year: 2014, img: "https://upload.wikimedia.org/wikipedia/en/3/39/TwoDots_Gameplay.jpg" },
  { id: 119, title: "2048", cat: "Puzzle", rate: 8.6, year: 2014, img: "https://upload.wikimedia.org/wikipedia/commons/1/18/2048_logo.svg" },
  { id: 120, title: "Threes!", cat: "Puzzle", rate: 9.1, year: 2014, img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Threes%21_app_icon.png" },
  { id: 121, title: "Asphalt 9", cat: "Corrida", rate: 9.3, year: 2018, img: "https://upload.wikimedia.org/wikipedia/en/7/72/Asphalt_9_Legends_cover_art.jpg" },
  { id: 122, title: "Real Racing 3", cat: "Corrida", rate: 9.2, year: 2013, img: "https://upload.wikimedia.org/wikipedia/en/3/38/Real_Racing_3_icon.jpg" },
  { id: 123, title: "Hill Climb Racing", cat: "Corrida", rate: 8.9, year: 2012, img: "https://upload.wikimedia.org/wikipedia/en/a/a3/Hill_Climb_Racing_icon.png" },
  { id: 124, title: "CSR Racing 2", cat: "Corrida", rate: 9.0, year: 2016, img: "https://upload.wikimedia.org/wikipedia/en/d/d9/CSR_Racing_app_icon.png" },
  { id: 125, title: "Need for Speed No Limits", cat: "Corrida", rate: 8.8, year: 2015, img: "https://upload.wikimedia.org/wikipedia/en/1/10/Need_for_Speed_No_Limits_cover_art.jpg" },
  { id: 126, title: "Clash of Clans", cat: "Estratégia", rate: 9.4, year: 2012, img: "https://upload.wikimedia.org/wikipedia/en/5/59/Clash_of_Clans_Logo.png" },
  { id: 127, title: "Clash Royale", cat: "Estratégia", rate: 9.3, year: 2016, img: "https://upload.wikimedia.org/wikipedia/en/f/f6/Clash_Royale_cover_art.jpg" },
  { id: 128, title: "Mobile Legends", cat: "Estratégia", rate: 9.2, year: 2016, img: "https://upload.wikimedia.org/wikipedia/en/0/02/Mobile_Legends_Bang_Bang_cover.jpg" },
  { id: 129, title: "Rise of Kingdoms", cat: "Estratégia", rate: 9.0, year: 2018, img: "https://upload.wikimedia.org/wikipedia/en/5/59/Clash_of_Clans_Logo.png" },
  { id: 130, title: "State of Survival", cat: "Estratégia", rate: 8.8, year: 2019, img: "https://upload.wikimedia.org/wikipedia/en/5/59/Clash_of_Clans_Logo.png" },
  { id: 131, title: "Granny", cat: "Terror", rate: 9.1, year: 2017, img: "https://upload.wikimedia.org/wikipedia/en/5/56/Granny_video_game_icon.jpg" },
  { id: 132, title: "Five Nights at Freddy's", cat: "Terror", rate: 9.3, year: 2014, img: "https://upload.wikimedia.org/wikipedia/en/3/3f/Five_Nights_at_Freddy%27s_cover_art.jpg" },
  { id: 133, title: "Dead by Daylight Mobile", cat: "Terror", rate: 9.0, year: 2020, img: "https://upload.wikimedia.org/wikipedia/en/d/d7/Dead_by_Daylight_cover_art.jpg" },
  { id: 134, title: "Evil Nun", cat: "Terror", rate: 8.8, year: 2018, img: "https://upload.wikimedia.org/wikipedia/en/5/56/Granny_video_game_icon.jpg" },
  { id: 135, title: "Eyes", cat: "Terror", rate: 8.7, year: 2019, img: "https://upload.wikimedia.org/wikipedia/en/5/56/Granny_video_game_icon.jpg" },
  { id: 136, title: "Mortal Kombat Mobile", cat: "Luta", rate: 9.2, year: 2015, img: "https://upload.wikimedia.org/wikipedia/en/5/57/Mortal_Kombat_Mobile_icon.jpg" },
  { id: 137, title: "Shadow Fight 3", cat: "Luta", rate: 9.1, year: 2017, img: "https://upload.wikimedia.org/wikipedia/en/e/e8/Shadow_Fight_3_icon.jpg" },
  { id: 138, title: "Skullgirls Mobile", cat: "Luta", rate: 9.3, year: 2017, img: "https://upload.wikimedia.org/wikipedia/en/3/3c/Skullgirls_Mobile_icon.jpg" },
  { id: 139, title: "Brawlhalla", cat: "Luta", rate: 9.0, year: 2017, img: "https://upload.wikimedia.org/wikipedia/en/b/b5/Brawlhalla_cover_art.jpg" },
  { id: 140, title: "Street Fighter IV CE", cat: "Luta", rate: 8.9, year: 2010, img: "https://upload.wikimedia.org/wikipedia/en/c/c2/Street_Fighter_IV_cover_art.jpg" },
];

let currentMode = "pc";
let currentTier = "all";

function switchMode(mode) {
  currentMode = mode;
  currentTier = "all";
  document.getElementById("btn-pc").classList.toggle("active", mode === "pc");
  document.getElementById("btn-mobile").classList.toggle("active", mode === "mobile");
  document.getElementById("btn-roblox").classList.toggle("active", mode === "roblox");
  document.getElementById("mode-label").textContent = mode === "pc" ? "PC" : (mode === "mobile" ? "Celular" : "Roblox");
  document.getElementById("tier-container").style.display = mode === "pc" || mode === "roblox" ? "flex" : "none";
  document.querySelectorAll(".tier-btn").forEach(b => b.classList.toggle("active", b.dataset.tier === "all"));
  render();
}

function selectTier(tier) {
  currentTier = tier;
  document.querySelectorAll(".tier-btn").forEach(b => b.classList.toggle("active", b.dataset.tier === tier));
  render();
}

function getInitials(title) {
  return title.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

function render() {
  let data = currentMode === "pc" || currentMode === "roblox" ? pcGames : mobileGames;
  if ((currentMode === "pc" || currentMode === "roblox") && currentTier !== "all") {
    data = data.filter(g => g.tier === currentTier);
    if (data.length === 0) {
      document.getElementById("app").innerHTML = '<p class="loading" style="grid-column:1/-1">Nenhum jogo encontrado para este nível.</p>';
      return;
    }
  }
  const groups = {};
  for (const g of data) {
    if (!groups[g.cat]) groups[g.cat] = [];
    groups[g.cat].push(g);
  }
  const app = document.getElementById("app");
  app.innerHTML = "";

  for (const [cat, games] of Object.entries(groups)) {
    const sorted = [...games].sort((a, b) => b.rate - a.rate);
    const best = sorted[0];
    const icon = categoryIcons[cat] || "&#127918;";
    const color = categoryColors[cat] || "#333";

    const section = document.createElement("section");
    section.className = "category";
    section.innerHTML = `
      <div class="category-header">
        <span class="icon">${icon}</span>
        <h2>${cat}</h2>
      </div>
      <div class="games-grid">
        ${sorted.map(g => {
          const initials = getInitials(g.title);
          const src = g.img || null;
          const imgHtml = src
            ? `<img class="game-image" src="${src}" alt="${g.title}" loading="lazy" onerror="this.parentNode.innerHTML='<div class=\\'game-image game-image-fallback\\' style=\\'background:${color}\\'><span class=\\'game-initials\\'>${initials}</span></div>'">`
            : `<div class="game-image game-image-fallback" style="background:${color}"><span class="game-initials">${initials}</span></div>`;
          const stars = "&#9733;".repeat(Math.floor(g.rate / 2)) + (g.rate % 2 >= 1 ? "&#189;" : "") + "&#9734;".repeat(5 - Math.floor(g.rate / 2) - (g.rate % 2 >= 1 ? 1 : 0));
          const tierBadge = g.tier ? `<span class="tier-game-badge tier-badge-${g.tier}">${tierNames[g.tier]}</span>` : "";
          return `
          <div class="game-card">
            ${imgHtml}
            <div class="game-info">
              ${g.id === best.id ? '<span class="best-badge">&#9733; Melhor</span>' : ''}
              <h3>${g.title}</h3>
              ${tierBadge}
              <div class="game-meta">${g.year}</div>
              <div class="game-rating">
                <span class="star">${stars}</span>
                ${g.rate.toFixed(1)}
              </div>
            </div>
          </div>`;
        }).join("")}
      </div>`;
    app.appendChild(section);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("tier-container").style.display = "flex";
  render();
});
