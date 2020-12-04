import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: orange;
            border-radius:5px;
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
        padding: 1.5rem 1.5rem 0.5rem 1.5rem;
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
