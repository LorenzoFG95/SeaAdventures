import styles from "./index.module.scss";

const Card = ({ data }) => {
  return (
    <div className={styles.Card}>
      <div>
        <p>{data.budget.value} per cabina.</p>
        <h3>{data.title}</h3>
      </div>
      <div>
        <div>in partenza da: {data.departure.port}</div>
        <div>
          <p>{data.boatType}</p>
          <p>{data.numberOfDays} giorni</p>
        </div>
      </div>
      <div>
        <div>{data.departureDate}</div>
        <div>{data.arrivalDate}</div>
      </div>
      <div>
        <p>
          {data.budget.costType}
          {data.reservations}
        </p>
        <p>disponibilità {data.reservationsAvailable}</p>
      </div>
      <button>Prenota</button>
    </div>
  );
};

export default Card;
