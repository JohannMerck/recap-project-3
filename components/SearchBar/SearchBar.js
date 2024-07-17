import { fetchCharacters } from "../../index.js";
let source = "https://rickandmortyapi.com/api/character/?page=1";

const searchQuery = "";
export function searchBarSubmitQuery() {
  const searchBarSubmit = document.querySelector('[data-js="search-bar"]');

  searchBarSubmit.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const searchQuery = Object.fromEntries(formData);

    console.log(searchQuery);

    source = `https://rickandmortyapi.com/api/character/?page=1
 &name=${searchQuery}`;

    fetchCharacters();
  });
}

// export { data }
