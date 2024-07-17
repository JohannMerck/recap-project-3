import { cardContainer, searchBarContainer, searchBar, navigation, prevButton, nextButton, pagination } from "./lib/data.js";
import { CharacterCard} from "./components/CharacterCard/CharacterCard.js";
import { searchBarSubmitQuery } from "./components/SearchBar/SearchBar.js";


let page = 1;
let maxPage = 42;

export function pageButtons() {
  prevButton.addEventListener("click", () => {
    if (page > 1) {
      page--;
      console.log(page);
      fetchCharacters();
    }
  });

  nextButton.addEventListener("click", () => {
    console.log(maxPage);
    if (page < 42 && maxPage > 1) {
      page++;
      console.log(page);
      fetchCharacters();
    }
  });
}

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
searchBarSubmitQuery();
pageButtons();