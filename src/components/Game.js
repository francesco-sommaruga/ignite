//redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/gameDetailActions';

//styles and animations
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Game = ({ game }) => {
    //load details
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        dispatch(loadDetail(game.id));
    };
    return (
        <StyledGame onClick={loadDetailHandler}>
            <h3>{game.name}</h3>
            <p>{game.released}</p>
            <img src={game.background_image} alt={game.name} />
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
        height: 100%;
        object-fit: cover;
    }
`;

export default Game;
