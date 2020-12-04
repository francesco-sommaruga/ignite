import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #ff7b00;
            border-radius:5px;
            &:hover {
                background-color:#c96100;
            }
        }
        &::-webkit-scrollbar-track{
            background-color: #dadada;
        }
    }
    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        padding-bottom:5rem;
    }
    h2{
        font-size: 3rem;
        font-weight: 900;
    }
    h3{
        font-weight: 700;
        color: #333;
    }
    p{
        padding-bottom: .5rem;
        line-height:100%;
        color: #696969;
    }
    a{
        text-decoration:none;
        color: #696969;
    }
`;

export default GlobalStyles;
