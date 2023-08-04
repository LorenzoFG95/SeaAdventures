import styles from "./index.module.scss";
import Card from "../card/Card";
import data from "../../assets/data.json";

const randomData = [];
for (let i = 0; i < 8; i++) {
  let randomItinerary = data[Math.floor(Math.random() * data.length)];
  while (randomData.includes(randomItinerary)) {
    randomItinerary = data[Math.floor(Math.random() * data.length)];
  }
  randomData.push(randomItinerary);
}

const Adventures = () => {
  return (
    <div className={styles.Adventures__container}>
      <h2 className={styles.Adventures__title}>Avventure da scoprire</h2>
      <div className={styles.Adventures}>
        {randomData.map((itinerary) => (
          <Card key={itinerary.id} data={itinerary} />
        ))}
      </div>
    </div>
  );
};

export default Adventures;
