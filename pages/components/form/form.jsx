import styles from './form.module.scss';

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
          submit
        </button>
      </form>
    </>
  );
};

export default Form;
