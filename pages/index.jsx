import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss';
//import Footer from './components/footer';
import Header from './components/header';
import styless from './index.module.scss';
import { connect } from 'react-redux';
import Form from './components/form/form';
import Weather from './components/weather/weather';
import axios from 'axios';

/* action */
import {
  decrementCounter,
  incrementCounter,
} from '../redux/action/counterAction';

const App = (props) => {
  const [weather, setWeather] = useState({});
  const APIKEY = 'fd28227b1b4cbbf08e6261d3a28905e1';

  const fetchData = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},&APPID=${APIKEY}`,
      );
      const json = await res.data;
      console.log('====================================');
      console.log(json.main.temp);
      console.log('====================================');
      setWeather({
        city: json.name,
        country: json.sys.country,
        description: json.weather[0].description,
        main: json.weather[0].main,
        temp: Math.round((json.main.temp * 9) / 5 - 459.67),
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Weather App</h1>
        <div>
          <Form getWeather={fetchData} />
          <Weather
            city={weather.city}
            country={weather.country}
            main={weather.main}
            temp={weather.temp}
          />
          {/*  <h1 className={styles.title}>{props.counter}</h1>
          <button onClick={props.incrementCounter}>Increment</button>
          <button onClick={props.decrementCounter}>Decrement</button> */}
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter.value,
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
