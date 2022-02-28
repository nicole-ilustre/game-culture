import Header from '../components/Header';
import HomePageIntro from '../components/HomePageIntro';
import GameIconsGrid from '../components/GameIconsGrid';

const HomePage = () => {
  return (
    <>
      <Header />
      <div className='body-container'>
        <HomePageIntro />
        <GameIconsGrid />
      </div>
    </>
  );
};

export default HomePage;
