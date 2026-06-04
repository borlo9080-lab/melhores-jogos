const pcGames = [
  { id: 1, title: "Blox Fruits", category: "RPG", rating: 9.6, year: 2019, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2753915549&width=768&height=432&format=png" },
  { id: 2, title: "World // Zero", category: "RPG", rating: 9.4, year: 2020, image: "https://www.roblox.com/asset-thumbnail/image?assetId=1278504545&width=768&height=432&format=png" },
  { id: 3, title: "King Legacy", category: "RPG", rating: 9.3, year: 2021, image: "https://www.roblox.com/asset-thumbnail/image?assetId=4529299233&width=768&height=432&format=png" },
  { id: 4, title: "Arcane Odyssey", category: "RPG", rating: 9.5, year: 2022, image: "https://tr.rbxcdn.com/30DAY-AvatarGUIDE-48x48-100.png" },
  { id: 5, title: "Swordburst 2", category: "RPG", rating: 9.1, year: 2018, image: "https://tr.rbxcdn.com/30DAY-AvatarGUIDE-48x48-100.png" },
  { id: 6, title: "Arsenal", category: "FPS", rating: 9.5, year: 2016, image: "https://www.roblox.com/asset-thumbnail/image?assetId=286090480&width=768&height=432&format=png" },
  { id: 7, title: "Phantom Forces", category: "FPS", rating: 9.4, year: 2015, image: "https://www.roblox.com/asset-thumbnail/image?assetId=292439477&width=768&height=432&format=png" },
  { id: 8, title: "Bad Business", category: "FPS", rating: 9.2, year: 2018, image: "https://www.roblox.com/asset-thumbnail/image?assetId=286090480&width=768&height=432&format=png" },
  { id: 9, title: "Counter Blox", category: "FPS", rating: 9.0, year: 2016, image: "https://www.roblox.com/asset-thumbnail/image?assetId=292439477&width=768&height=432&format=png" },
  { id: 10, title: "Rivals", category: "FPS", rating: 9.3, year: 2021, image: "https://www.roblox.com/asset-thumbnail/image?assetId=286090480&width=768&height=432&format=png" },
  { id: 11, title: "Adopt Me!", category: "Aventura", rating: 9.7, year: 2017, image: "https://www.roblox.com/asset-thumbnail/image?assetId=375992766&width=768&height=432&format=png" },
  { id: 12, title: "Brookhaven RP", category: "Aventura", rating: 9.6, year: 2020, image: "https://www.roblox.com/asset-thumbnail/image?assetId=375992766&width=768&height=432&format=png" },
  { id: 13, title: "Jailbreak", category: "Aventura", rating: 9.5, year: 2017, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2432640257&width=768&height=432&format=png" },
  { id: 14, title: "Natural Disaster Survival", category: "Aventura", rating: 9.0, year: 2008, image: "https://www.roblox.com/asset-thumbnail/image?assetId=189707&width=768&height=432&format=png" },
  { id: 15, title: "Livetopia", category: "Aventura", rating: 9.2, year: 2021, image: "https://www.roblox.com/asset-thumbnail/image?assetId=375992766&width=768&height=432&format=png" },
  { id: 16, title: "DOORS", category: "Puzzle", rating: 9.6, year: 2022, image: "https://www.roblox.com/asset-thumbnail/image?assetId=6516141723&width=768&height=432&format=png" },
  { id: 17, title: "Escape Room", category: "Puzzle", rating: 9.2, year: 2019, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2899400669&width=768&height=432&format=png" },
  { id: 18, title: "The Maze", category: "Puzzle", rating: 8.9, year: 2020, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2899400669&width=768&height=432&format=png" },
  { id: 19, title: "Find the Markers", category: "Puzzle", rating: 9.0, year: 2022, image: "https://www.roblox.com/asset-thumbnail/image?assetId=6106467870&width=768&height=432&format=png" },
  { id: 20, title: "The Crossword", category: "Puzzle", rating: 8.7, year: 2021, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2899400669&width=768&height=432&format=png" },
  { id: 21, title: "Driving Empire", category: "Corrida", rating: 9.4, year: 2019, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2482798404&width=768&height=432&format=png" },
  { id: 22, title: "Vehicle Simulator", category: "Corrida", rating: 9.3, year: 2017, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2000140230&width=768&height=432&format=png" },
  { id: 23, title: "Car Crushers 2", category: "Corrida", rating: 9.1, year: 2018, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2482798404&width=768&height=432&format=png" },
  { id: 24, title: "Midnight Racing: Tokyo", category: "Corrida", rating: 9.0, year: 2022, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2482798404&width=768&height=432&format=png" },
  { id: 25, title: "Ultimate Driving", category: "Corrida", rating: 8.8, year: 2016, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2000140230&width=768&height=432&format=png" },
  { id: 26, title: "Tower Defense Simulator", category: "Estratégia", rating: 9.5, year: 2019, image: "https://www.roblox.com/asset-thumbnail/image?assetId=1031441993&width=768&height=432&format=png" },
  { id: 27, title: "BedWars", category: "Estratégia", rating: 9.4, year: 2020, image: "https://www.roblox.com/asset-thumbnail/image?assetId=6723319538&width=768&height=432&format=png" },
  { id: 28, title: "Tower Battles", category: "Estratégia", rating: 9.2, year: 2017, image: "https://www.roblox.com/asset-thumbnail/image?assetId=1031441993&width=768&height=432&format=png" },
  { id: 29, title: "Zombie Attack", category: "Estratégia", rating: 8.9, year: 2015, image: "https://www.roblox.com/asset-thumbnail/image?assetId=1031441993&width=768&height=432&format=png" },
  { id: 30, title: "Skibi Defense", category: "Estratégia", rating: 9.0, year: 2023, image: "https://www.roblox.com/asset-thumbnail/image?assetId=6723319538&width=768&height=432&format=png" },
  { id: 31, title: "The Mimic", category: "Terror", rating: 9.5, year: 2021, image: "https://www.roblox.com/asset-thumbnail/image?assetId=5889580631&width=768&height=432&format=png" },
  { id: 32, title: "Piggy", category: "Terror", rating: 9.4, year: 2020, image: "https://www.roblox.com/asset-thumbnail/image?assetId=4609227647&width=768&height=432&format=png" },
  { id: 33, title: "Rainbow Friends", category: "Terror", rating: 9.3, year: 2022, image: "https://www.roblox.com/asset-thumbnail/image?assetId=5889580631&width=768&height=432&format=png" },
  { id: 34, title: "The Rake", category: "Terror", rating: 8.9, year: 2020, image: "https://www.roblox.com/asset-thumbnail/image?assetId=4609227647&width=768&height=432&format=png" },
  { id: 35, title: "Alone", category: "Terror", rating: 9.0, year: 2021, image: "https://www.roblox.com/asset-thumbnail/image?assetId=5889580631&width=768&height=432&format=png" },
  { id: 36, title: "Super Power Fighting Simulator", category: "Luta", rating: 9.3, year: 2019, image: "https://www.roblox.com/asset-thumbnail/image?assetId=1185801290&width=768&height=432&format=png" },
  { id: 37, title: "Strongest Punch Simulator", category: "Luta", rating: 9.1, year: 2020, image: "https://www.roblox.com/asset-thumbnail/image?assetId=1185801290&width=768&height=432&format=png" },
  { id: 38, title: "Rumble Quest", category: "Luta", rating: 9.0, year: 2021, image: "https://www.roblox.com/asset-thumbnail/image?assetId=1185801290&width=768&height=432&format=png" },
  { id: 39, title: "Punch Simulator", category: "Luta", rating: 8.7, year: 2018, image: "https://www.roblox.com/asset-thumbnail/image?assetId=1185801290&width=768&height=432&format=png" },
  { id: 40, title: "Sword Fights on the Heights", category: "Luta", rating: 8.9, year: 2009, image: "https://www.roblox.com/asset-thumbnail/image?assetId=1185801290&width=768&height=432&format=png" },
];

const mobileGames = [
  { id: 101, title: "Genshin Impact", category: "RPG", rating: 9.7, year: 2020, image: "https://upload.wikimedia.org/wikipedia/en/9/94/Genshin_Impact_cover_art.jpg" },
  { id: 102, title: "Honkai: Star Rail", category: "RPG", rating: 9.5, year: 2023, image: "https://upload.wikimedia.org/wikipedia/en/5/5d/Honkai_Star_Rail_cover_art.jpg" },
  { id: 103, title: "Tower of Fantasy", category: "RPG", rating: 9.1, year: 2022, image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Tower_of_Fantasy_cover_art.jpg" },
  { id: 104, title: "Summoners War", category: "RPG", rating: 9.0, year: 2014, image: "https://upload.wikimedia.org/wikipedia/en/5/5c/Summoners_War_icon.jpg" },
  { id: 105, title: "Black Desert Mobile", category: "RPG", rating: 8.9, year: 2019, image: "https://upload.wikimedia.org/wikipedia/en/7/7a/Black_Desert_Online_cover_art.jpg" },
  { id: 106, title: "Call of Duty Mobile", category: "FPS", rating: 9.5, year: 2019, image: "https://upload.wikimedia.org/wikipedia/en/6/66/Call_of_Duty_Mobile_cover_art.jpg" },
  { id: 107, title: "PUBG Mobile", category: "FPS", rating: 9.4, year: 2018, image: "https://upload.wikimedia.org/wikipedia/en/5/50/PUBG_Mobile_cover_art.jpg" },
  { id: 108, title: "Free Fire", category: "FPS", rating: 9.2, year: 2017, image: "https://upload.wikimedia.org/wikipedia/en/3/32/Free_Fire_%28video_game%29_logo.png" },
  { id: 109, title: "Standoff 2", category: "FPS", rating: 9.0, year: 2018, image: "https://www.roblox.com/asset-thumbnail/image?assetId=286090480&width=768&height=432&format=png" },
  { id: 110, title: "Modern Combat 5", category: "FPS", rating: 8.9, year: 2014, image: "https://upload.wikimedia.org/wikipedia/en/b/b2/Modern_Combat_5.jpg" },
  { id: 111, title: "Monument Valley", category: "Aventura", rating: 9.6, year: 2014, image: "https://upload.wikimedia.org/wikipedia/en/f/f0/Monument_Valley_cover.jpg" },
  { id: 112, title: "Oceanhorn", category: "Aventura", rating: 9.1, year: 2013, image: "https://upload.wikimedia.org/wikipedia/en/5/5c/Oceanhorn_box_art.jpg" },
  { id: 113, title: "Life is Strange", category: "Aventura", rating: 9.3, year: 2015, image: "https://upload.wikimedia.org/wikipedia/en/3/34/Life_is_Strange_cover_art.jpg" },
  { id: 114, title: "Grimvalor", category: "Aventura", rating: 9.0, year: 2018, image: "https://upload.wikimedia.org/wikipedia/en/f/f0/Monument_Valley_cover.jpg" },
  { id: 115, title: "Limbo", category: "Aventura", rating: 9.2, year: 2010, image: "https://upload.wikimedia.org/wikipedia/en/6/65/Limbo_%28video_game%29_cover.jpg" },
  { id: 116, title: "Candy Crush Saga", category: "Puzzle", rating: 8.8, year: 2012, image: "https://upload.wikimedia.org/wikipedia/en/6/6d/Candy_Crush_Saga_icon.png" },
  { id: 117, title: "Cut the Rope", category: "Puzzle", rating: 9.0, year: 2010, image: "https://upload.wikimedia.org/wikipedia/en/b/bf/Cut_the_Rope_icon.png" },
  { id: 118, title: "Two Dots", category: "Puzzle", rating: 8.7, year: 2014, image: "https://upload.wikimedia.org/wikipedia/en/3/39/TwoDots_Gameplay.jpg" },
  { id: 119, title: "2048", category: "Puzzle", rating: 8.6, year: 2014, image: "https://upload.wikimedia.org/wikipedia/commons/1/18/2048_logo.svg" },
  { id: 120, title: "Threes!", category: "Puzzle", rating: 9.1, year: 2014, image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Threes%21_app_icon.png" },
  { id: 121, title: "Asphalt 9", category: "Corrida", rating: 9.3, year: 2018, image: "https://upload.wikimedia.org/wikipedia/en/7/72/Asphalt_9_Legends_cover_art.jpg" },
  { id: 122, title: "Real Racing 3", category: "Corrida", rating: 9.2, year: 2013, image: "https://upload.wikimedia.org/wikipedia/en/3/38/Real_Racing_3_icon.jpg" },
  { id: 123, title: "Hill Climb Racing", category: "Corrida", rating: 8.9, year: 2012, image: "https://upload.wikimedia.org/wikipedia/en/a/a3/Hill_Climb_Racing_icon.png" },
  { id: 124, title: "CSR Racing 2", category: "Corrida", rating: 9.0, year: 2016, image: "https://upload.wikimedia.org/wikipedia/en/d/d9/CSR_Racing_app_icon.png" },
  { id: 125, title: "Need for Speed No Limits", category: "Corrida", rating: 8.8, year: 2015, image: "https://upload.wikimedia.org/wikipedia/en/1/10/Need_for_Speed_No_Limits_cover_art.jpg" },
  { id: 126, title: "Clash of Clans", category: "Estratégia", rating: 9.4, year: 2012, image: "https://upload.wikimedia.org/wikipedia/en/5/59/Clash_of_Clans_Logo.png" },
  { id: 127, title: "Clash Royale", category: "Estratégia", rating: 9.3, year: 2016, image: "https://upload.wikimedia.org/wikipedia/en/f/f6/Clash_Royale_cover_art.jpg" },
  { id: 128, title: "Mobile Legends", category: "Estratégia", rating: 9.2, year: 2016, image: "https://upload.wikimedia.org/wikipedia/en/0/02/Mobile_Legends_Bang_Bang_cover.jpg" },
  { id: 129, title: "Rise of Kingdoms", category: "Estratégia", rating: 9.0, year: 2018, image: "https://upload.wikimedia.org/wikipedia/en/5/59/Clash_of_Clans_Logo.png" },
  { id: 130, title: "State of Survival", category: "Estratégia", rating: 8.8, year: 2019, image: "https://upload.wikimedia.org/wikipedia/en/5/59/Clash_of_Clans_Logo.png" },
  { id: 131, title: "Granny", category: "Terror", rating: 9.1, year: 2017, image: "https://upload.wikimedia.org/wikipedia/en/5/56/Granny_video_game_icon.jpg" },
  { id: 132, title: "Five Nights at Freddy's", category: "Terror", rating: 9.3, year: 2014, image: "https://upload.wikimedia.org/wikipedia/en/3/3f/Five_Nights_at_Freddy%27s_cover_art.jpg" },
  { id: 133, title: "Dead by Daylight Mobile", category: "Terror", rating: 9.0, year: 2020, image: "https://upload.wikimedia.org/wikipedia/en/d/d7/Dead_by_Daylight_cover_art.jpg" },
  { id: 134, title: "Evil Nun", category: "Terror", rating: 8.8, year: 2018, image: "https://upload.wikimedia.org/wikipedia/en/5/56/Granny_video_game_icon.jpg" },
  { id: 135, title: "Eyes", category: "Terror", rating: 8.7, year: 2019, image: "https://upload.wikimedia.org/wikipedia/en/5/56/Granny_video_game_icon.jpg" },
  { id: 136, title: "Mortal Kombat Mobile", category: "Luta", rating: 9.2, year: 2015, image: "https://upload.wikimedia.org/wikipedia/en/5/57/Mortal_Kombat_Mobile_icon.jpg" },
  { id: 137, title: "Shadow Fight 3", category: "Luta", rating: 9.1, year: 2017, image: "https://upload.wikimedia.org/wikipedia/en/e/e8/Shadow_Fight_3_icon.jpg" },
  { id: 138, title: "Skullgirls Mobile", category: "Luta", rating: 9.3, year: 2017, image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Skullgirls_Mobile_icon.jpg" },
  { id: 139, title: "Brawlhalla", category: "Luta", rating: 9.0, year: 2017, image: "https://upload.wikimedia.org/wikipedia/en/b/b5/Brawlhalla_cover_art.jpg" },
  { id: 140, title: "Street Fighter IV CE", category: "Luta", rating: 8.9, year: 2010, image: "https://upload.wikimedia.org/wikipedia/en/c/c2/Street_Fighter_IV_cover_art.jpg" },
];

const categoryIcons = {
  "RPG": "&#9876;",
  "FPS": "&#127918;",
  "Aventura": "&#9968;",
  "Puzzle": "&#129528;",
  "Corrida": "&#128663;",
  "Estratégia": "&#9822;",
  "Terror": "&#128128;",
  "Luta": "&#129354;",
};

let currentMode = "pc";

function switchMode(mode) {
  currentMode = mode;
  document.getElementById("btn-pc").classList.toggle("active", mode === "pc");
  document.getElementById("btn-mobile").classList.toggle("active", mode === "mobile");
  document.getElementById("mode-label").textContent = mode === "pc" ? "PC" : "Celular";
  render();
}

function groupByCategory(games) {
  const groups = {};
  for (const game of games) {
    if (!groups[game.category]) groups[game.category] = [];
    groups[game.category].push(game);
  }
  return groups;
}

function renderStars(rating) {
  const full = Math.floor(rating / 2);
  const half = rating % 2 >= 1 ? 1 : 0;
  return "&#9733;".repeat(full) + (half ? "&#189;" : "") + "&#9734;".repeat(5 - full - half);
}

function render() {
  const data = currentMode === "pc" ? pcGames : mobileGames;
  const groups = groupByCategory(data);
  const app = document.getElementById("app");
  app.innerHTML = "";

  for (const [category, games] of Object.entries(groups)) {
    const sorted = [...games].sort((a, b) => b.rating - a.rating);
    const best = sorted[0];

    const section = document.createElement("section");
    section.className = "category";

    const icon = categoryIcons[category] || "&#127918;";

    section.innerHTML = `
      <div class="category-header">
        <span class="icon">${icon}</span>
        <h2>${category}</h2>
      </div>
      <div class="games-grid">
        ${sorted.map(game => `
          <div class="game-card">
            <img class="game-image" src="${game.image}" alt="${game.title}" loading="lazy"
              onerror="this.style.display='none'">
            <div class="game-info">
              ${game.id === best.id ? '<span class="best-badge">&#9733; Melhor</span>' : ''}
              <h3>${game.title}</h3>
              <div class="game-meta">${game.year}</div>
              <div class="game-rating">
                <span class="star">${renderStars(game.rating)}</span>
                ${game.rating.toFixed(1)}
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
    app.appendChild(section);
  }
}

document.addEventListener("DOMContentLoaded", () => render());
