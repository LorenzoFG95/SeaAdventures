import styles from "./index.module.scss";

const Card = ({ data }) => {
  return (
    <div className={styles.Card}>
      <div>
        <div>
          <h3>{data.budget.value}€</h3> <span>per cabina.</span>
        </div>
        <h3>{data.title}</h3>
      </div>
      <div className={styles.card__flex}>
        <div>
          <div className={styles.accent}>in partenza da:</div>
          <h4>{data.departure.Port}</h4>
        </div>
        <div>
          <p className={styles.bold}>{data.boatType}</p>
          <p className={styles.bold}>{data.numberOfDays} giorni</p>
        </div>
      </div>
      <div>
        <div>{data.departureDate}</div>
        <div>{data.arrivalDate}</div>
      </div>
      <div>
        <p>
          {data.reservations}
          {data.budget.costType === "per cabina" ? " Cabine" : " Persone"}
        </p>
        <p>
          <span className={styles.accent}>disponibilità </span>
          <span className={styles.bold}>{data.reservationsAvailable}</span>
        </p>
      </div>
      <button>Prenota</button>
    </div>
  );
};

export default Card;
