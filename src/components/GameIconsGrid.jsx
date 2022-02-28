import gameDetails from '../assets/gameDetails';
import { Container, Row, Col } from 'react-bootstrap';

const GameIconsGrid = () => {
  return (
    <Container id='games-grid'>
      <Row>
        {Object.keys(gameDetails).map((game) => {
          return (
            <Col md={3}>
              <a href={'/game-page/' + game}>
                <img
                  className='game-icon-img'
                  src={gameDetails[game].icon}
                  alt={game}
                />
              </a>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default GameIconsGrid;
