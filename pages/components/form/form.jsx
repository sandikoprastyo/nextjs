import styles from './form.module.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Form = (props) => {
  return (
    <>
      <form onSubmit={props.getWeather} className={styles.form}>
        <label for='city' className={styles.city}>
          city
        </label>
        <input
          className={styles.input}
          type='text'
          name='city'
          id='city'
          placeholder='Enter City'
          required
        />

        <button className={styles.button} type='submit'>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </>
  );
};

export default Form;
