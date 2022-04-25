import styled from 'styled-components';

export const Header = styled.header`
    font-family: 'Alata', sans-serif;
    width: 100%;
    background-color: var(--background);
    color: var(--white);
    border-bottom: 1px solid var(--border-separate);
`;

export const NavBarNav = styled.nav`
    height: 10vh;
    display: flex;
    align-items: center;
    padding: 0px 8px;
    justify-content: space-between;

    h1 {
        color: var(--white);
        letter-spacing: 6px;
        cursor: default;
    }
`;

export const NavListUl = styled.ul`
    font-family: 'IBM Plex Sans', sans-serif;
    display: flex;
    color: var(--gray);
    list-style: none;

    li {
        margin-left: 35px;
        cursor: pointer;
        font-size: 1.3rem;
        
        a {
            transition: all 0.4s;

            &:hover {
                color: var(--purple-light);
                border-bottom: 1px solid var(--purple-light);
            }
        }
    }
`;

export const Main = styled.main`
    color: var(--white);
`;

export const GridLayoutDiv = styled.div`
    max-width: 1140px;
    margin: 0 auto;
`;

export const HomeSection = styled.section`
    background-color: var(--background);
`;

export const HomeDiv = styled.div`
    height: 80vh;
    display: flex;
    align-items: center;
`;

export const HomeContainerTextDiv = styled.div`
    width: 100%;

    h1 {
        font-size: 2rem;
        font-weight: 400;

        .homeName {
            font-size: 3rem;
            font-weight: 600;
        }
    }
`;

export const HomeContainerImageDiv = styled.div`
    width: 65%;
`;

export const HomeImageSvg = styled.img`
    width: 100%;
`;

export const WhoAmISection = styled.section`
    background-color: var(--background-light);
    padding: 96px 48px;
`;

export const WhoAmIDiv = styled.div`
    display: flex;
    align-items: center;
`;

export const ImageWhoAmIDiv = styled.div`
    width: 50%;
    padding-right: 100px;
`;

export const ImageWhoAmIImg = styled.img`
    width: 400px;
`;

export const WhoAmITextDiv = styled.div`

`;

export const WhoAmINameH2 = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 1rem;

    span {
        font-size: 4rem;
        color: var(--purple-light);
    }
`;

export const WhoAmINameP = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
`;

export const ProjectsSection = styled.section`
    background-color: var(--background);
    padding: 2rem 0 2rem 0;
    display: flex;
    padding: 7rem 7rem;
`;

export const ProjectsContainerDiv = styled.div`
    display: grid;
    grid-template-columns: 18rem 18rem 18rem;
    grid-gap: 100px 80px;

    div {
        width: 18rem;
        height: 12rem;
        border: 2px solid transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--background-light);
        transition: all 0.5s;
        cursor: pointer;

        img {
            width: 200px;
        }

        &:hover {
            border: 2px solid var(--purple-light);
        }
    }
`;