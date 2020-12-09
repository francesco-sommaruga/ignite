import { useEffect } from 'react';

//styles and animations
import styled from 'styled-components';
import { motion } from 'framer-motion';

//redux data fetching
import { useSelector } from 'react-redux';

//history
import { useHistory } from 'react-router-dom';

//image resizer
import { smallImage } from '../util';

//images
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';

import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetail = ({ pathId }) => {
    //get data
    const { game, screenshots, isLoading } = useSelector(state => state.gameDetails);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => (document.body.style.overflow = 'auto');
    }, []);

    //remove component when clicking on the CardShadow
    const history = useHistory();
    const handleShadowClick = ({ target }) => {
        target.classList.contains('shadow') && history.push('/');
    };

    //render icons
    const renderPlatformIcons = platform => {
        switch (platform) {
            case 'PlayStation 4':
                return playstation;
            case 'PlayStation 5':
                return playstation;
            case 'Xbox Series S/X':
                return xbox;
            case 'Xbox S':
                return xbox;
            case 'Xbox One':
                return xbox;
            case 'PC':
                return steam;
            case 'Nintendo Switch':
                return nintendo;
            case 'iOS':
                return apple;
            default:
                return gamepad;
        }
    };

    const renderStars = rating => {
        const stars = [];
        rating = Math.round(rating);
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) stars.push(<img src={starFull} alt="full star" key={i} />);
            if (i > rating) stars.push(<img src={starEmpty} alt="empty star" key={i} />);
        }
        return stars;
    };

    return (
        <CardShadow className="shadow" onClick={handleShadowClick}>
            <Details key="details" variants={animation} initial="hidden" animate="show" exit="exit">
                {isLoading ? (
                    <h3>Loading...</h3>
                ) : (
                    <>
                        <Stats>
                            <div className="rating">
                                <motion.h3>{game.name}</motion.h3>
                                {game.rating ? (
                                    <div>
                                        {renderStars(game.rating)}
                                        <p>{game.rating}</p>
                                    </div>
                                ) : (
                                    <p>N.D.</p>
                                )}
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms.map(data => (
                                        <div key={data.platform.id} className="platform">
                                            <img
                                                src={renderPlatformIcons(data.platform.name)}
                                                alt={data.platform.name}
                                            />
                                            <h6>{data.platform.name}</h6>
                                        </div>
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img src={smallImage(game.background_image, 1280)} alt={game.name} />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screenshots.results.map(screenshot => (
                                <img
                                    src={smallImage(screenshot.image, 1280)}
                                    key={screenshot.id}
                                    alt="game screenshot"
                                />
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
    z-index: 10;
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
    min-height: 100%;
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
    .rating {
        img {
            width: 1rem;
            height: 1rem;
            display: inline;
        }
        p {
            display: inline;
            width: auto;
        }
    }
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    .platform {
        margin-left: 3rem;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
        img {
            width: 2.5rem;
            height: 2.5rem;
            object-fit: contain;
            margin-bottom: 0.7rem;
        }
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

const animation = {
    hidden: {
        y: 300,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.25,
            ease: 'easeOut',
        },
    },
    exit: {
        y: 300,
        opacity: 0,
        transition: {
            duration: 0.25,
            ease: 'easeOut',
        },
    },
};

export default GameDetail;
