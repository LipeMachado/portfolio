import { createGlobalStyle } from "styled-components";

import Outfit300 from './Assets/fonts/Outfit/Outfit-Light.ttf'
import Outfit400 from './Assets/fonts/Outfit/Outfit-Regular.ttf'
import Outfit600 from './Assets/fonts/Outfit/Outfit-SemiBold.ttf'
import IbmPlexSans from './Assets/fonts/IbmPlexSans/IBMPlexSans-Regular.ttf'
import Alata from './Assets/fonts/Alata/Alata-Regular.ttf'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Outfit300;
        src: url(${Outfit300});
    }

    @font-face {
        font-family: Outfit400;
        src: url(${Outfit400});
    }

    @font-face {
        font-family: Outfit600;
        src: url(${Outfit600});
    }

    @font-face {
        font-family: IbmPlexSans;
        src: url(${IbmPlexSans});
    }

    @font-face {
        font-family: Alata;
        src: url(${Alata});
    }

    :root {
        --background: #0e091b;
        --background-transparent: #18052df8;
        --background-black: #060509;
        --background-black-transparent: rgba(10, 10, 25, 0.7);
        --background-light: #130f1f;
        --background-page404: #161622;
        --scroll-background: #6610f2;
        --white: #ffffff;
        --purple-light: #894ee7;
        --blue: #2d7cd7;
        --purple: #8352FD;
        --purple-hover: #9670f9;
        --gray: #cccccc;
        --gray-transparent: rgba(255, 255, 255, 0.1); 
        --border-separate: rgba(114, 114, 126, 0.2);
        --font-outfit-light: Outfit300, sans-serif;
        --font-outfit-regular: Outfit400, sans-serif;
        --font-outfit-semibold: Outfit600, sans-serif;
        --font-ibm-plex-sans: IbmPlexSans, sans-serif;
        --font-alata: Alata, sans-serif;
    }
    
    * {
        margin: 0;
        padding: 0;
    }

    html {
        scroll-behavior: smooth;
        font-family: var(--font-outfit-regular);
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