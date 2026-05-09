import styles from "./CountryItem.module.css";
import PropTypes from "prop-types";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}
CountryItem.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.number.isRequired,
    emoji: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};

export default CountryItem;
