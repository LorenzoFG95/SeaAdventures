import { filterSwitch } from "../../shared/utilities/switch";
import Card from "../card/Card";
import styles from "./index.module.scss";

import data from "../../assets/data.json";
import { useState } from "react";

const CardContainer = () => {
  const [filterCategory, setFilterCategory] = useState("departure");
  const onHandleFilterCategory = (e) => {
    setFilterCategory(e.target.value);
    switch (e.target.value) {
      case "departure":
        setFilterName("Favignana");
        break;
      case "numberOfDays":
        setFilterName("1");
        break;
      case "boatType":
        setFilterName("Barca a vela");
        break;
      case "reservationsAvailable":
        setFilterName("1");
        break;
    }
  };
  const [filterName, setFilterName] = useState("Favignana");
  const onHandleFilter = (e) => setFilterName(e.target.value);
  console.log(data);
  console.log(filterCategory);
  console.log(filterName);
  function name(params) {
    if (filterCategory === "departure") {
      return params.departure.Port === filterName;
    }
    if (filterCategory === "numberOfDays") {
      return params.numberOfDays == filterName;
    }
    if (filterCategory === "boatType") {
      return params.boatType === filterName;
    }
    if (filterCategory === "reservationsAvailable") {
      return params.reservationsAvailable == filterName;
    }
  }
  const filteredData = data.filter(name);

  return (
    <div className={styles.CardContainer}>
      <select onChange={onHandleFilterCategory} name="mostraPer" id="mostraPer">
        <option value="departure">Porto di partenza</option>
        <option value="numberOfDays">n° di giorni</option>
        <option value="boatType">Tipo di imbarcazione</option>
        <option value="reservationsAvailable">Disponibilità</option>
      </select>
      <select onChange={onHandleFilter} name="mostraPer" id="mostraPer">
        {filterSwitch(filterCategory)}
      </select>
      {filteredData.map((itinerary) => (
        <Card key={crypto.randomUUID()} data={itinerary} />
      ))}
    </div>
  );
};

export default CardContainer;
