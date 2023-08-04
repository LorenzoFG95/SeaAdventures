import styles from "./index.module.scss";
import Card from "../card/Card";
import data from "../../assets/data.json";

const randomData = [];
randomData.push(data[Math.floor(Math.random() * data.length)]);
randomData.push(data[Math.floor(Math.random() * data.length)]);
randomData.push(data[Math.floor(Math.random() * data.length)]);
randomData.push(data[Math.floor(Math.random() * data.length)]);
randomData.push(data[Math.floor(Math.random() * data.length)]);
randomData.push(data[Math.floor(Math.random() * data.length)]);
randomData.push(data[Math.floor(Math.random() * data.length)]);
randomData.push(data[Math.floor(Math.random() * data.length)]);
console.log(randomData);

const Adventures = () => {
  return (
    <div className={styles.Adventures__container}>
      <h2>Avventure da scoprire</h2>
      <div className={styles.Adventures}>
        {randomData.map((itinerary) => (
          <Card key={itinerary.id} data={itinerary} />
        ))}
      </div>
    </div>
  );
};

export default Adventures;
