export function searchBarSubmitQuery() {
  const searchBarSubmit = document.querySelector('[data-js="search-bar"]');

  searchBarSubmit.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
  });
}

// export { data }
