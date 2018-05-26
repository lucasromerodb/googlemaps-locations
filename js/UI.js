class Ui {
  constructor() {
    this.api =  new Api();
    this.latLng = {lat: 19.390519, lng:-99.3739778};
    this.map = new google.maps.Map(document.getElementById('mapa'), {
      center: this.latLng,
      zoom: 6
    });
  }

  showLocations() {
    this.api.getData()
      .then(data => {
         const handleResponse = data.response.results;
         this.showPins(handleResponse)
       })
  }

  showPins(pins) {
    let activeInfoWindow;
    pins.forEach(pin => {
      // destructuring
      let {latitude, longitude, calle, regular, premium} = pin;
      let latLng = {lat: Number(latitude), lng: Number(longitude)};
      let marker = new google.maps.Marker({
        position: latLng,
        map: this.map
      })
      let infoWindow = this.crateInfoWindow(calle, regular, premium);
      marker.addListener('click', () => {
        const close = activeInfoWindow ? activeInfoWindow.close() : null
        infoWindow.open(this.map, marker);
        activeInfoWindow = infoWindow;
      })

    })

  }

  crateInfoWindow(calle, regular, premium) {
    let windowContent = `
      Calle: <b>${calle}</b> <br>
      Regular: <b>${regular}</b> p/litro <br>
      Premium: <b>${premium}</b> p/litro
    `
    let infoWindow = new google.maps.InfoWindow({
      content: windowContent
    })
    return infoWindow;
  }

  getSearch(busqueda) {
    this.api.getData()
      .then(data => {
        const handleResponse = data.response.results;
        this.filterSearch(handleResponse, busqueda);
      })
  }

  filterSearch(handleResponse, busqueda) {
    console.log(handleResponse);
    const filtered = handleResponse.filter(item => item.calle.indexOf('Gudadalajara') !==  -1);
    console.log(filtered);
  };
}
