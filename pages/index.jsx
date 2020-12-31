import React from 'react';
import styles from '../styles/Home.module.scss';
import Footer from './components/footer';
import Header from './components/header';
import styless from './index.module.scss';
import { connect } from 'react-redux';
import {
  decrementCounter,
  incrementCounter,
} from '../redux/action/counterAction';

class App extends React.Component {
  static getInitialProps({ store }) {}
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <h1 className={styles.title}>Weather App</h1>
          <input
            className={styless.input}
            type='text'
            name='weather'
            placeholder='Enter City'
          />
          <div>
            <h1 className={styles.title}>{this.props.counter}</h1>
            <button onClick={this.props.incrementCounter}>Increment</button>
            <button onClick={this.props.decrementCounter}>Decrement</button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.value,
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
