import styled from 'styled-components';

export const Page404ContainerMain = styled.main`
    height: 100vh;
    background-color: var(--background-page404);
    position: relative;
`;

export const Page404ContainerDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Page404Numberh1 = styled.h1`
    font-family: var(--font-ibm-plex-sans);
    font-size: 25vw;
    user-select: none;
    letter-spacing: 2px;
    color: var(--gray-transparent);
    
    @media only screen and (max-width: 550px){
        font-size: 150px;
    }
`;

export const Page404TextDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
`;

export const Page404TextH2 = styled.h2`
    color: var(--white);
    font-size: 48px;
    user-select: none;
    white-space: nowrap;

    @media only screen and (max-width: 550px){
        font-size: 30px;
    }
`;

export const Page404TextButtonDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;


    a {
        text-decoration: none;
        padding: 18.5px 32px;
        background-color: var(--purple);
        border-radius: 8px;
        margin-top: 20px;
        font-size: 16px;
        color: var(--white);
        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: var(--purple-hover);
        }
        
        @media only screen and (max-width: 550px){
            padding: 12px 20px;
        }
    }
`;