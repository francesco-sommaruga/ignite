import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesActions';

//styles and animations
import styled from 'styled-components';
import { motion } from 'framer-motion';

//components
import GameList from '../components/GameList';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    const { popular, newGames, upcoming } = useSelector(state => state.games);
    console.log(popular, newGames, upcoming);
    return (
        <div>
            <GameList games={upcoming} title="Upcoming Games" />
            <GameList games={popular} title="Popular Games" />
            <GameList games={newGames} title="New Games" />
        </div>
    );
};

export default Home;
