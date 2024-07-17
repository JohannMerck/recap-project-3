import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { searchBarSubmitQuery } from "./components/SearchBar/SearchBar.js";
// import { page } from "./components/NavButton/NavButton.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');

const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
const maxPage = 42;
let page = 1;

// States

const searchQuery = "";

// index.js

//Character Card
//Empty Container
export async function fetchCharacters() {
  pagination.textContent = `${page} / ${maxPage}`;
  cardContainer.innerHTML = "";
  const source = `https://rickandmortyapi.com/api/character/?page=${page}`;
  //Fetch Data from Source
  const response = await fetch(source);
  const data = await response.json();
  const characters = data.results;
  //Fill Data in Cards
  characters.forEach((character) => {
    CharacterCard(character);
  });
}

fetchCharacters();
// searchBarSubmitQuery();
// changePage();

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    console.log(page);
    fetchCharacters();
  }
});

nextButton.addEventListener("click", () => {
  if (page < 42) {
    page++;
    console.log(page);
    fetchCharacters();
  }
});

searchBarSubmitQuery();
