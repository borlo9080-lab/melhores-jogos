const gamesData = [
  // RPG
  { id: 1, title: "Blox Fruits", category: "RPG", rating: 9.6, year: 2019, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2753915549&width=768&height=432&format=png" },
  { id: 2, title: "World // Zero", category: "RPG", rating: 9.4, year: 2020, image: "https://www.roblox.com/asset-thumbnail/image?assetId=1278504545&width=768&height=432&format=png" },
  { id: 3, title: "King Legacy", category: "RPG", rating: 9.3, year: 2021, image: "https://www.roblox.com/asset-thumbnail/image?assetId=4529299233&width=768&height=432&format=png" },
  { id: 4, title: "Arcane Odyssey", category: "RPG", rating: 9.5, year: 2022, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2753915549&width=768&height=432&format=png" },
  { id: 5, title: "Swordburst 2", category: "RPG", rating: 9.1, year: 2018, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2753915549&width=768&height=432&format=png" },

  // FPS
  { id: 6, title: "Arsenal", category: "FPS", rating: 9.5, year: 2016, image: "https://www.roblox.com/asset-thumbnail/image?assetId=286090480&width=768&height=432&format=png" },
  { id: 7, title: "Phantom Forces", category: "FPS", rating: 9.4, year: 2015, image: "https://www.roblox.com/asset-thumbnail/image?assetId=292439477&width=768&height=432&format=png" },
  { id: 8, title: "Bad Business", category: "FPS", rating: 9.2, year: 2018, image: "https://www.roblox.com/asset-thumbnail/image?assetId=286090480&width=768&height=432&format=png" },
  { id: 9, title: "Counter Blox", category: "FPS", rating: 9.0, year: 2016, image: "https://www.roblox.com/asset-thumbnail/image?assetId=292439477&width=768&height=432&format=png" },
  { id: 10, title: "Rivals", category: "FPS", rating: 9.3, year: 2021, image: "https://www.roblox.com/asset-thumbnail/image?assetId=286090480&width=768&height=432&format=png" },

  // Aventura
  { id: 11, title: "Adopt Me!", category: "Aventura", rating: 9.7, year: 2017, image: "https://www.roblox.com/asset-thumbnail/image?assetId=375992766&width=768&height=432&format=png" },
  { id: 12, title: "Brookhaven RP", category: "Aventura", rating: 9.6, year: 2020, image: "https://www.roblox.com/asset-thumbnail/image?assetId=375992766&width=768&height=432&format=png" },
  { id: 13, title: "Jailbreak", category: "Aventura", rating: 9.5, year: 2017, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2432640257&width=768&height=432&format=png" },
  { id: 14, title: "Natural Disaster Survival", category: "Aventura", rating: 9.0, year: 2008, image: "https://www.roblox.com/asset-thumbnail/image?assetId=189707&width=768&height=432&format=png" },
  { id: 15, title: "Livetopia", category: "Aventura", rating: 9.2, year: 2021, image: "https://www.roblox.com/asset-thumbnail/image?assetId=375992766&width=768&height=432&format=png" },

  // Puzzle
  { id: 16, title: "DOORS", category: "Puzzle", rating: 9.6, year: 2022, image: "https://www.roblox.com/asset-thumbnail/image?assetId=6516141723&width=768&height=432&format=png" },
  { id: 17, title: "Escape Room", category: "Puzzle", rating: 9.2, year: 2019, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2899400669&width=768&height=432&format=png" },
  { id: 18, title: "The Maze", category: "Puzzle", rating: 8.9, year: 2020, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2899400669&width=768&height=432&format=png" },
  { id: 19, title: "Find the Markers", category: "Puzzle", rating: 9.0, year: 2022, image: "https://www.roblox.com/asset-thumbnail/image?assetId=6106467870&width=768&height=432&format=png" },
  { id: 20, title: "The Crossword", category: "Puzzle", rating: 8.7, year: 2021, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2899400669&width=768&height=432&format=png" },

  // Corrida
  { id: 21, title: "Driving Empire", category: "Corrida", rating: 9.4, year: 2019, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2482798404&width=768&height=432&format=png" },
  { id: 22, title: "Vehicle Simulator", category: "Corrida", rating: 9.3, year: 2017, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2000140230&width=768&height=432&format=png" },
  { id: 23, title: "Car Crushers 2", category: "Corrida", rating: 9.1, year: 2018, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2482798404&width=768&height=432&format=png" },
  { id: 24, title: "Midnight Racing: Tokyo", category: "Corrida", rating: 9.0, year: 2022, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2482798404&width=768&height=432&format=png" },
  { id: 25, title: "Ultimate Driving", category: "Corrida", rating: 8.8, year: 2016, image: "https://www.roblox.com/asset-thumbnail/image?assetId=2000140230&width=768&height=432&format=png" },

  // Estratégia
  { id: 26, title: "Tower Defense Simulator", category: "Estratégia", rating: 9.5, year: 2019, image: "https://www.roblox.com/asset-thumbnail/image?assetId=1031441993&width=768&height=432&format=png" },
  { id: 27, title: "BedWars", category: "Estratégia", rating: 9.4, year: 2020, image: "https://www.roblox.com/asset-thumbnail/image?assetId=6723319538&width=768&height=432&format=png" },
  { id: 28, title: "Tower Battles", category: "Estratégia", rating: 9.2, year: 2017, image: "https://www.roblox.com/asset-thumbnail/image?assetId=1031441993&width=768&height=432&format=png" },
  { id: 29, title: "Zombie Attack", category: "Estratégia", rating: 8.9, year: 2015, image: "https://www.roblox.com/asset-thumbnail/image?assetId=1031441993&width=768&height=432&format=png" },
  { id: 30, title: "Skibi Defense", category: "Estratégia", rating: 9.0, year: 2023, image: "https://www.roblox.com/asset-thumbnail/image?assetId=6723319538&width=768&height=432&format=png" },

  // Terror
  { id: 31, title: "The Mimic", category: "Terror", rating: 9.5, year: 2021, image: "https://www.roblox.com/asset-thumbnail/image?assetId=5889580631&width=768&height=432&format=png" },
  { id: 32, title: "Piggy", category: "Terror", rating: 9.4, year: 2020, image: "https://www.roblox.com/asset-thumbnail/image?assetId=4609227647&width=768&height=432&format=png" },
  { id: 33, title: "Rainbow Friends", category: "Terror", rating: 9.3, year: 2022, image: "https://www.roblox.com/asset-thumbnail/image?assetId=5889580631&width=768&height=432&format=png" },
  { id: 34, title: "The Rake", category: "Terror", rating: 8.9, year: 2020, image: "https://www.roblox.com/asset-thumbnail/image?assetId=4609227647&width=768&height=432&format=png" },
  { id: 35, title: "Alone", category: "Terror", rating: 9.0, year: 2021, image: "https://www.roblox.com/asset-thumbnail/image?assetId=5889580631&width=768&height=432&format=png" },

  // Luta
  { id: 36, title: "Super Power Fighting Simulator", category: "Luta", rating: 9.3, year: 2019, image: "https://www.roblox.com/asset-thumbnail/image?assetId=1185801290&width=768&height=432&format=png" },
  { id: 37, title: "Strongest Punch Simulator", category: "Luta", rating: 9.1, year: 2020, image: "https://www.roblox.com/asset-thumbnail/image?assetId=1185801290&width=768&height=432&format=png" },
  { id: 38, title: "Rumble Quest", category: "Luta", rating: 9.0, year: 2021, image: "https://www.roblox.com/asset-thumbnail/image?assetId=1185801290&width=768&height=432&format=png" },
  { id: 39, title: "Punch Simulator", category: "Luta", rating: 8.7, year: 2018, image: "https://www.roblox.com/asset-thumbnail/image?assetId=1185801290&width=768&height=432&format=png" },
  { id: 40, title: "Sword Fights on the Heights", category: "Luta", rating: 8.9, year: 2009, image: "https://www.roblox.com/asset-thumbnail/image?assetId=1185801290&width=768&height=432&format=png" },
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
  const groups = groupByCategory(gamesData);
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

document.addEventListener("DOMContentLoaded", render);
