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

const Adventures = () => {
  return (
    <div className={styles.Adventures}>
      {randomData.map((itinerary) => (
        <Card key={itinerary.id} data={itinerary} />
      ))}
    </div>
  );
};

export default Adventures;
