import styled from 'styled-components';

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

    @media only screen and (max-width: 1200px){
        padding: 0 2rem;
    }
`;

export const NavListUl = styled.ul`
    font-family: var(--font-ibm-plex-sans);
    display: flex;
    align-items: center;
    color: var(--gray);
    list-style: none;

    li {
        margin-left: 35px;
        font-size: 1.3rem;
        margin-right: 10px;

        a {
            transition: all ease-in-out 0.3s;
            cursor: pointer;

            &:hover {
                color: var(--purple-light);
            }

            &::after {
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

    @media only screen and (max-width: 1200px) {
        display: none;
    }
`;

export const LanguageLi = styled.li`
    margin-top: 4px;
    position: relative;

    svg:hover {
        transition: all 0.3s ease-in-out;
        color: var(--purple-light);
        cursor: pointer;
    }
`;

export const ThemeModeLi = styled.li`
    margin-top: 4px;
    position: relative;

    svg:hover {
        transition: all 0.3s ease-in-out;
        color: var(--purple-light);
        cursor: pointer;
    }
`;

export const ThemeDarkIconDiv = styled.div`
    display: none;

    &.disabled {
        display: block;
    }
`;

export const ThemeLightIconDiv = styled.div`
    display: block;

    &.active {
        display: none;
    }
`;