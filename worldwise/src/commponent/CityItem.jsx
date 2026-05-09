import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "../Contexts/citiesContext";
import PropTypes from "prop-types";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));
export default function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { id, emoji, date, cityName, position } = city;
  function handleDelete(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    // <ul className={styles.cityList}>
    <li>
      <Link
        className={`${styles.cityItem} ${currentCity.id === id ? styles["cityItem--active"] : ""}`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.cityName}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          &times;
        </button>
      </Link>
    </li>
    // </ul>
  );
}
CityItem.propTypes = {
  city: PropTypes.shape({
    id: PropTypes.number.isRequired,
    emoji: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    cityName: PropTypes.string.isRequired,
    position: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
