import Card from "../card/Card";
import styles from "./index.module.scss";

import data from "../../assets/data.json";

const CardContainer = () => {
  return (
    <div className={styles.CardContainer}>
      <Card data={data[0]} />
    </div>
  );
};

export default CardContainer;
