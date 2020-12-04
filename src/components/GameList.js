import styled from 'styled-components';
import { motion } from 'framer-motion';
import Game from './Game';

const GameList = ({title, games}) => {
    return (
        <StyledGameList>
            <h2>{title}</h2>
            <Games>
                {games.map(game => (
                    <Game game={game} key={game.id} />
                ))}
            </Games>
        </StyledGameList>
    );
};

const StyledGameList = styled.div`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default GameList;
