import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

// index.js

//Character Card
//Empty Container
async function fetchCharacters() {
  cardContainer.innerHTML = "";

  //Fetch Data from Source
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/?page=1"
  );
  const data = await response.json();
  const characters = data.results;
  //Fill Data in Cards
  characters.forEach((character) => {
    const card = CharacterCard(character);
    cardContainer.append(card);
  });
}

fetchCharacters();
