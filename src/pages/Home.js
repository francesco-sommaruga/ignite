import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesActions';

//styles and animations
import styled from 'styled-components';
import { motion } from 'framer-motion';

//routing
import { useLocation } from 'react-router-dom';

//components
import GameList from '../components/GameList';
import GameDetail from '../components/GameDetail';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    const { popular, newGames, upcoming } = useSelector(state => state.games);
    const { game } = useSelector(state => state.gameDetails);

    //get current location
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];

    return (
        <div>
            {pathId && <GameDetail />}
            <GameList games={upcoming} title="Upcoming Games" />
            <GameList games={popular} title="Popular Games" />
            <GameList games={newGames} title="New Games" />
        </div>
    );
};

export default Home;
