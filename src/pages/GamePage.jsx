import { useParams } from 'react-router';
import gameDetails from '../assets/gameDetails';
import NoPageFound from './NoPageFound';
import Header from '../components/Header';

const GamePage = () => {
  const { id } = useParams();
  const game = gameDetails[id] ? gameDetails[id] : null;

  if (game) {
    return (
      <>
        <Header />
        <div className='body-container'>
          <h1>{game.title.toUpperCase()}</h1>
          <p>{game.numberOfPlayers} players</p>
          <p>{game.duration}</p>
          <p>{game.description}</p>
          <img className='game-icon-img' src={game.icon} alt={game.title} />
        </div>
      </>
    );
  } else {
    return <NoPageFound />;
  }
};

export default GamePage;
