const ui = new Ui();
document.addEventListener('DOMContentLoaded', () => {
  ui.showLocations();
});

const searchBar = document.querySelector('#buscar input');
searchBar.addEventListener('input', () => {
  if (searchBar.value.length > 4) {
    // obtener sugerencias que sean parte de la busqueda
    ui.getSearch();
    console.log(searchBar.value);
  }
})
