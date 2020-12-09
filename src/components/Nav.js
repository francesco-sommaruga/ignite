import styled from 'styled-components';
import { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';

const Nav = () => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <StyledNav>
            <Logo>
                <img src={logo} alt="logo" />
                <h1>Ignite</h1>
            </Logo>
            <div className={`search ${isFocused && 'active'}`}>
                <input type="text" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
                <button>Search</button>
            </div>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    padding: 3rem 5rem;
    text-align: center;
    input {
        height: 3rem;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        outline: none;
        transition: box-shadow 0.1s ease-in-out;
        font-weight: bold;
    }
    button {
        height: 3.1rem;
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: #fff;
        outline: none;
    }
    .search {
        width: max-content;
        margin-top: 1rem;
        margin-left: auto;
        margin-right: auto;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.2), 0 0 0 1px #ff7676;
        transition: box-shadow 0.1s ease;
    }
    .search.active {
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.2), 0 0 0 5px rgba(255, 118, 118, 0.3);
    }
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img {
        height: 2rem;
        width: 2rem;
    }
`;

export default Nav;
