//styles and animations
import styled from 'styled-components';
import { motion } from 'framer-motion';

//redux data fetching
import { useSelector } from 'react-redux';

const GameDetail = () => {
    //get data
    const { game, screenshots, isLoading } = useSelector(state => state.gameDetails);

    return (
        <CardShadow>
            <Details>
                {isLoading ? (
                    <h3>Loading...</h3>
                ) : (
                    <>
                        <Stats>
                            <div className="rating">
                                <h3>{game.name}</h3>
                                <p>Rating: {game.rating}</p>
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms.map(data => (
                                        <h3 key={data.platform.id}>{data.platform.name}</h3>
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <img src={game.background_image} alt={game.name} />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screenshots.results.map(screenshot => (
                                <img src={screenshot.image} key={screenshot.id} alt="game screenshot" />
                            ))}
                        </div>
                    </>
                )}
            </Details>
        </CardShadow>
    );
};

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff4800;
        border-radius: 5px;
        &:hover {
            background-color: #d43c00;
        }
    }
    &::-webkit-scrollbar-track {
        background-color: #dadada;
    }
`;

const Details = styled(motion.div)`
    width: 80%;
    min-height: 80%;
    margin: 5rem 0;
    border-radius: 1rem;
    padding: 2% 5%;
    background: #fff;
    position: absolute;
    left: 10%;
    color: black;
    h3 {
        padding: 1.5rem 0 0.5rem 0;
    }
    img {
        width: 100%;
    }
`;
const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0;
`;

export default GameDetail;
