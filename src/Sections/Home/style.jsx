import styled from 'styled-components';

export const HomeDiv = styled.div`
    height: 80vh;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    
    @media only screen and (max-width: 1200px){
        display: flex;
        justify-content: center;
        text-align: center;
    }
`;

export const HomeContainerTextDiv = styled.div`
    width: 50%;

    @media only screen and (max-width: 1200px){
        width: 100%;
    }
`;

export const HomeTextDiv = styled.div`
    font-size: 2rem;
    font-weight: 400;

    span {
        font-size: 3rem;
        color: var(--purple-light);
        font-family: none;
    }
`;

export const HomeTextNameH1 = styled.h1`
    font-family: var(--font-ibm-plex-sans);
`;

export const HomeContainerImageDiv = styled.div.attrs(() => ({
    className: 'animatedImage'
}))`
    @media only screen and (max-width: 1200px){
        display: none;
    }
`;

export const HomeImageSvg = styled.img`
    transition: all 0.8s;

    &:hover {
        transform: scale(1.05);
    }
`;