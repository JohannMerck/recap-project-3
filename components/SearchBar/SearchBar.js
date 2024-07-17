import { pagination, cardContainer } from "../../lib/data.js";
import { CharacterCard } from "../CharacterCard/CharacterCard.js";


export function searchBarSubmitQuery() {
  const searchBarSubmit = document.querySelector('[data-js="search-bar"]');

  searchBarSubmit.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchQuery = Object.fromEntries(formData);
    cardContainer.innerHTML = "";

    const sourceName = `https://rickandmortyapi.com/api/character/?name=${searchQuery.query.toLowerCase()}`;

    //Fetch Data from Source
    const response = await fetch(sourceName);
    const dataName = await response.json();
    const characterName = dataName.results;
    characterName.forEach((character) => {
      CharacterCard(character)
    })
    let maxPage = Math.ceil(characterName.length / 20)
    pagination.textContent = `1 / ${maxPage}`;

    });
  };
