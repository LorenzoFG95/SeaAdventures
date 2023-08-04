import styles from "./index.module.scss";

const Info = () => {
  return (
    <div className={styles.Info}>
      <span>
        <h2>+20</h2>
        <h2> Destinazioni</h2>
      </span>
      <span>
        <h2>+15</h2>
        <h2> Imbarcazioni</h2>
      </span>
      <span>
        <h2>+40</h2>
        <h2> Itinerari</h2>
      </span>
    </div>
  );
};

export default Info;
