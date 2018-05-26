class Api {
  async getData() {
    const data = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico');
    const response = await data.json();
    return {
      response
    }
  }
}
