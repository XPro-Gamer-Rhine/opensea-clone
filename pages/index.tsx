import type { NextPage } from 'next';
import Ranking from '../components/page/content/ranking';
import Trending from '../components/page/content/trending';
import Instruction from '../components/page/footer/instruction';
import Header from '../components/page/header/header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Trending />
      <Ranking />

      <Instruction />
    </>
  );
};

export default Home;
