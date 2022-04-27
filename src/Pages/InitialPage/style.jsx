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
            transition: all ease-in-out 0.3s;

            &::after {
                color: var(--purple-light);
                display: block;
                width: 0;
                content: "";
                border: 2px solid transparent;
            }

            &:hover::after {
                animation: animate 0.3s linear forwards;
            }

            @keyframes animate {
                0% {
                    width: 0;
                    border-top-color: transparent;
                }

                50% {
                    width: 50%;
                    border-top-color: var(--purple-light);
                }
            
                100% {
                    width: 100%;
                    border-top-color: var(--purple-light);
                }
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
    transition: all 0.8s;

    &:hover {
        transform: scale(1.05);
    }
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

    transition: all 0.8s;

    &:hover {
        transform: scale(1.05);
    }
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
    display: flex;
    padding: 2rem 5rem 7rem 5rem;
    border-bottom: 1px solid var(--border-separate);
`;

export const ProjectsTitleH1 = styled.h1`
    text-align: center;
    margin-bottom: 3.5rem;
`;

export const ProjectsContainerDiv = styled.div`
    display: grid;
    grid-template-columns: 18rem 18rem 18rem;
    grid-gap: 100px 80px;
`;

export const SkillsSection = styled.section`
    background-color: var(--background);
    display: flex;
    justify-content: center;
    height: 100vh;

    h1 {
        margin-top: 50px;
    }
    //padding: 2rem 5rem 7rem 5rem;
`;