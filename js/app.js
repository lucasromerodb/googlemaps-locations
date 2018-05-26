const ui = new Ui();
document.addEventListener('DOMContentLoaded', () => {
  ui.showLocations();
});

const searchBar = document.querySelector('#buscar input');
searchBar.addEventListener('input', () => {
  if (searchBar.value.length > 3) {
    // obtener sugerencias que sean parte de la busqueda
    ui.getSearch(searchBar.value);
  } else if (searchBar.value.length === 0) {

  }{
    ui.initMap();
    ui.showLocations();
  }
})
