const gamesData = [
  // RPG
  { id: 1, title: "The Witcher 3: Wild Hunt", category: "RPG", rating: 9.8, year: 2015, image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg" },
  { id: 2, title: "Elden Ring", category: "RPG", rating: 9.7, year: 2022, image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg" },
  { id: 3, title: "Chrono Trigger", category: "RPG", rating: 9.6, year: 1995, image: "https://upload.wikimedia.org/wikipedia/en/a/a7/Chrono_Trigger_Box_Art.jpg" },
  { id: 4, title: "Final Fantasy VII", category: "RPG", rating: 9.4, year: 1997, image: "https://upload.wikimedia.org/wikipedia/en/c/c2/Final_Fantasy_VII_Box_Art.jpg" },
  { id: 5, title: "Persona 5 Royal", category: "RPG", rating: 9.5, year: 2020, image: "https://upload.wikimedia.org/wikipedia/en/8/84/Persona_5_Royal_cover_art.jpg" },

  // FPS
  { id: 6, title: "Half-Life 2", category: "FPS", rating: 9.7, year: 2004, image: "https://upload.wikimedia.org/wikipedia/en/2/25/Half-Life_2_cover.jpg" },
  { id: 7, title: "DOOM (2016)", category: "FPS", rating: 9.3, year: 2016, image: "https://upload.wikimedia.org/wikipedia/en/7/7c/Doom_2016_cover_art.jpg" },
  { id: 8, title: "BioShock", category: "FPS", rating: 9.5, year: 2007, image: "https://upload.wikimedia.org/wikipedia/en/a/a3/BioShock_cover_art.jpg" },
  { id: 9, title: "Call of Duty 4: Modern Warfare", category: "FPS", rating: 9.4, year: 2007, image: "https://upload.wikimedia.org/wikipedia/en/6/64/Call_of_Duty_4_Modern_Warfare_cover.jpg" },
  { id: 10, title: "Titanfall 2", category: "FPS", rating: 9.2, year: 2016, image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Titanfall_2_cover_art.jpg" },

  // Aventura
  { id: 11, title: "The Legend of Zelda: Breath of the Wild", category: "Aventura", rating: 9.8, year: 2017, image: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg" },
  { id: 12, title: "Red Dead Redemption 2", category: "Aventura", rating: 9.7, year: 2018, image: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg" },
  { id: 13, title: "Shadow of the Colossus", category: "Aventura", rating: 9.5, year: 2005, image: "https://upload.wikimedia.org/wikipedia/en/5/5c/Shadow_of_the_Colossus_cover.jpg" },
  { id: 14, title: "Metroid Prime", category: "Aventura", rating: 9.4, year: 2002, image: "https://upload.wikimedia.org/wikipedia/en/e/ee/Metroid_Prime_box_art.jpg" },
  { id: 15, title: "Journey", category: "Aventura", rating: 9.3, year: 2012, image: "https://upload.wikimedia.org/wikipedia/en/4/45/Journey_%28video_game%29_box_art.jpg" },

  // Puzzle
  { id: 16, title: "Portal 2", category: "Puzzle", rating: 9.7, year: 2011, image: "https://upload.wikimedia.org/wikipedia/en/f/f9/Portal2_cover.jpg" },
  { id: 17, title: "Tetris Effect", category: "Puzzle", rating: 9.4, year: 2018, image: "https://upload.wikimedia.org/wikipedia/en/2/2d/Tetris_Effect_cover_art.jpg" },
  { id: 18, title: "The Witness", category: "Puzzle", rating: 9.3, year: 2016, image: "https://upload.wikimedia.org/wikipedia/en/2/26/The_Witness_cover.jpg" },
  { id: 19, title: "Baba Is You", category: "Puzzle", rating: 9.2, year: 2019, image: "https://upload.wikimedia.org/wikipedia/en/b/be/Baba_Is_You_cover_art.jpg" },
  { id: 20, title: "Portal", category: "Puzzle", rating: 9.6, year: 2007, image: "https://upload.wikimedia.org/wikipedia/en/1/19/Portal_Box_Art.jpg" },

  // Corrida
  { id: 21, title: "Forza Horizon 5", category: "Corrida", rating: 9.5, year: 2021, image: "https://upload.wikimedia.org/wikipedia/en/7/7f/Forza_Horizon_5_cover_art.jpg" },
  { id: 22, title: "Mario Kart 8 Deluxe", category: "Corrida", rating: 9.4, year: 2017, image: "https://upload.wikimedia.org/wikipedia/en/9/9a/Mario_Kart_8_Deluxe_box_art.png" },
  { id: 23, title: "Gran Turismo 7", category: "Corrida", rating: 9.1, year: 2022, image: "https://upload.wikimedia.org/wikipedia/en/2/2f/Gran_Turismo_7_cover_art.jpg" },
  { id: 24, title: "Burnout Paradise", category: "Corrida", rating: 9.0, year: 2008, image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Burnout_Paradise_box_art.jpg" },
  { id: 25, title: "F-Zero GX", category: "Corrida", rating: 9.3, year: 2003, image: "https://upload.wikimedia.org/wikipedia/en/6/60/F-Zero_GX_Box_Art.jpg" },

  // Estratégia
  { id: 26, title: "StarCraft II", category: "Estratégia", rating: 9.5, year: 2010, image: "https://upload.wikimedia.org/wikipedia/en/1/1c/StarCraft_II_-_Box_Art.jpg" },
  { id: 27, title: "Civilization VI", category: "Estratégia", rating: 9.2, year: 2016, image: "https://upload.wikimedia.org/wikipedia/en/d/d6/Civilization_VI_cover_art.jpg" },
  { id: 28, title: "Age of Empires II", category: "Estratégia", rating: 9.6, year: 1999, image: "https://upload.wikimedia.org/wikipedia/en/8/86/Age_of_Empires_II_box_art.jpg" },
  { id: 29, title: "XCOM 2", category: "Estratégia", rating: 9.3, year: 2016, image: "https://upload.wikimedia.org/wikipedia/en/1/1b/XCOM_2_cover_art.jpg" },
  { id: 30, title: "Cities: Skylines", category: "Estratégia", rating: 9.1, year: 2015, image: "https://upload.wikimedia.org/wikipedia/en/4/4e/Cities_Skylines_cover_art.jpg" },

  // Terror
  { id: 31, title: "Resident Evil 2 (Remake)", category: "Terror", rating: 9.5, year: 2019, image: "https://upload.wikimedia.org/wikipedia/en/8/86/Resident_Evil_2_Remake_cover_art.jpg" },
  { id: 32, title: "Silent Hill 2", category: "Terror", rating: 9.4, year: 2001, image: "https://upload.wikimedia.org/wikipedia/en/2/2a/Silent_Hill_2_cover.png" },
  { id: 33, title: "Amnesia: The Dark Descent", category: "Terror", rating: 9.2, year: 2010, image: "https://upload.wikimedia.org/wikipedia/en/5/56/Amnesia_The_Dark_Descent_cover.png" },
  { id: 34, title: "Alien: Isolation", category: "Terror", rating: 9.1, year: 2014, image: "https://upload.wikimedia.org/wikipedia/en/5/5b/Alien_Isolation_cover_art.jpg" },
  { id: 35, title: "Dead Space", category: "Terror", rating: 9.3, year: 2008, image: "https://upload.wikimedia.org/wikipedia/en/5/56/Dead_Space_cover_art.jpg" },

  // Luta
  { id: 36, title: "Super Smash Bros. Ultimate", category: "Luta", rating: 9.6, year: 2018, image: "https://upload.wikimedia.org/wikipedia/en/5/50/Super_Smash_Bros._Ultimate_cover_art.jpg" },
  { id: 37, title: "Street Fighter III: 3rd Strike", category: "Luta", rating: 9.3, year: 1999, image: "https://upload.wikimedia.org/wikipedia/en/b/b6/Street_Fighter_III_3rd_Strike_box_art.png" },
  { id: 38, title: "Tekken 3", category: "Luta", rating: 9.4, year: 1997, image: "https://upload.wikimedia.org/wikipedia/en/5/50/Tekken_3_cover.jpg" },
  { id: 39, title: "Mortal Kombat 11", category: "Luta", rating: 9.1, year: 2019, image: "https://upload.wikimedia.org/wikipedia/en/4/4e/Mortal_Kombat_11_cover_art.jpg" },
  { id: 40, title: "Guilty Gear Strive", category: "Luta", rating: 9.2, year: 2021, image: "https://upload.wikimedia.org/wikipedia/en/3/3d/Guilty_Gear_Strive_cover_art.jpg" },
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
