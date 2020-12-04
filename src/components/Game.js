//redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/gameDetailActions';

//styles and animations
import styled from 'styled-components';
import { motion } from 'framer-motion';

//link for react router
import { Link } from 'react-router-dom';

//image resizer
import { smallImage } from '../util';

const Game = ({ game }) => {
    //load details
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        dispatch(loadDetail(game.id));
    };

    return (
        <StyledGame onClick={loadDetailHandler}>
            <Link to={`/game/${game.id}`}>
                <h3>{game.name}</h3>
                <p>{game.released}</p>
                <img src={smallImage(game.background_image, 640)} alt={game.name} />
            </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    max-height: 40vh;
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    overflow: hidden;
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
    img {
        width: 100%;
        min-height: 80%;
        display: block;
        object-fit: cover;
    }
    h3 {
        padding: 1.5rem 1.5rem 0.5rem 1.5rem;
    }
`;

export default Game;
