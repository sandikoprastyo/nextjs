import styles from './weather.module.scss';

const Weather = ({ city, country, temp, description, error, main }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header__weather}>
        {city && <h1>{city}</h1>} {country && <h1>{country}</h1>}
      </div>
      {temp && <h1 className={styles.temp}>{temp}°F</h1>}
      {main && <h2 className={styles.main}>{main}</h2>}
      {description && <p className={styles.desc}>{description}</p>}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Weather;
