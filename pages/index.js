import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { CocktailForm, MainPage } from '../components';
import Footer from '../components/Footer';
import { Header } from '../components/Header';
import { AppProvider } from '../context/AppContext';
export default function Home() {
  return (
    <>
      <Head>
        <title>Tipsytail - Find your cocktail</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
}
