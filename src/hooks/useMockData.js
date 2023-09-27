import games from "../services/getData.js";
let list = document.getElementById("list");

function showData() {
  games.forEach((game) => {
    list.innerHTML += `
          <li>${game.description} </li>
      `;
  });
}

showData();
