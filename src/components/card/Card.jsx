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
          <div className={styles.accent}>PARTENZA DA</div>
          <h4>{data.departure.Port}</h4>
        </div>
        <div>
          <p className={styles.bold}>{data.boatType}</p>
          <p className={styles.bold}>{data.numberOfDays} giorni</p>
        </div>
      </div>
      <div className={styles.card__flex}>
        <div>
          <p>{data.departureDate.split(" ")[0]}</p>
          <p className={styles.accent}>{data.departureDate.split(" ")[1]}</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="#273049"
            d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"
          />
        </svg>
        <div>
          <p>{data.arrivalDate.split(" ")[0]}</p>
          <p className={styles.accent}>{data.arrivalDate.split(" ")[1]}</p>
        </div>
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
      <button>PRENOTA</button>
    </div>
  );
};

export default Card;
