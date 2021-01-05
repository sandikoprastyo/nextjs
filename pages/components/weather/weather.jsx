import styles from './weather.module.scss';

const Weather = ({ city, country, temp, description, error, main }) => {
  return (
    <div className={styles.container}>
      {city && <p>{city}</p>}
      {country && <p>{country}</p>}
      {temp && <p>{temp}°F</p>}
      {description && <p>{description}</p>}
      {main && <p>{main}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Weather;
