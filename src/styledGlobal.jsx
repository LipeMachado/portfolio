import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #0e091b;
        --background-black: #060509;
        --background-light: #171026;
        --scroll-background: #6610f2;
        --white: #ffffff;
        --purple-light: #894ee7;
        --gray: #cccccc;
        --border-separate: rgba(114, 114, 126, 0.2);
    }
    
    * {
        margin: 0;
        padding: 0;
    }

    html {
        scroll-behavior: smooth;
        font-family: 'Outfit', sans-serif;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background-color: var(--background);
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--scroll-background);
        border-radius: 8px;
    }
`;