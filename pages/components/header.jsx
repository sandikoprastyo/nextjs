import Head from 'next/head';
import styles from '../../styles/Home.module.scss';

const header = () => {
  return (
    <Head>
      <html lang='en'></html>
      <title>Weather App</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default header;
