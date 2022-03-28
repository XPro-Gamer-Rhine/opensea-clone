import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import DarkMode from '../components/darkModeToggle';
import Ranking from '../components/page/content/ranking';
import Trending from '../components/page/content/trending';
import Footer from '../components/page/footer/footer';
import Instruction from '../components/page/footer/instruction';
import Header from '../components/page/header';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Ranking />
      <Trending />
      <Instruction />
      <Footer />
    </>
  );
};

export default Home;
