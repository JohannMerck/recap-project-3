function searchBarSubmitQuery() {
  const searchBarSubmit = document.querySelector('[data-js="search-bar"]');

  searchBarSubmit.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const searchQuery = Object.fromEntries(formData);

    console.log(searchQuery);

    source = `${source}&name=${searchQuery}`;

    fetchCharactersviaNames();

    async function fetchCharactersviaNames() {
      pagination.textContent = `${page} / ${maxPage}`;
      cardContainer.innerHTML = "";
      const sourceName = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;
      //Fetch Data from Source
      const response = await fetch(sourceName);
      const dataNames = await response.json();
      const charactersNames = dataNames.results;
      //Fill Data in Cards
      charactersNames.forEach((character) => {
        const card = characterCard(character);
        cardContainer.append(card);
      });
    }
  });
}

// export { data }
