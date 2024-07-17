const pagination = document.querySelector('[data-js="pagination"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

export function searchBarSubmitQuery() {
  const searchBarSubmit = document.querySelector('[data-js="search-bar"]');

  searchBarSubmit.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const searchQuery = Object.fromEntries(formData);

    console.log(searchQuery);

    pagination.textContent = "1 / 1";
    cardContainer.innerHTML = "";
    const sourceNames = "https://rickandmortyapi.com/api/character/";
    //Fetch Data from Source
    const response = await fetch(sourceNames);
    const dataNames = await response.json();
    const charactersNames = dataNames.results;

    console.log(charactersNames);
    //Fill Data in Cards
    const searchedCharacter = charactersNames.filter((character) => {
      character.name === searchQuery;

      console.log(searchedCharacter);
    });
    cardContainer.append(searchedCharacter);
  });
}

// export { data }
