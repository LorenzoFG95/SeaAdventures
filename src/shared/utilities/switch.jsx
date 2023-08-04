export const filterSwitch = (state) => {
  switch (state) {
    case "departure":
      return (
        <>
          <option value="Favignana">Favignana</option>
          <option value="Lipari">Lipari</option>
          <option value="Palermo">Palermo</option>
          <option value="San Vito lo Capo">San Vito lo Capo</option>
          <option value="Marsala">Marsala</option>
          <option value="Lampedusa">Lampedusa</option>
          <option value="Pantelleria">Pantelleria</option>
          <option value="Salina">Salina</option>
          <option value="Favignana">Favignana</option>
          <option value="Ustica">Ustica</option>
        </>
      );
    case "numberOfDays":
      return (
        <>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </>
      );
    case "boatType":
      return (
        <>
          <option value="Barca a vela">Barca a vela</option>
          <option value="Catamarano">Catamarano</option>
          <option value="Gommone">Gommone</option>
          <option value="Yacht">Yacht</option>
          <option value="Barca">Barca</option>
        </>
      );
    case "reservationsAvailable":
      return (
        <>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="12">12</option>
        </>
      );

    default:
      return <option value="0">Scegliere un filtro</option>;
  }
};
