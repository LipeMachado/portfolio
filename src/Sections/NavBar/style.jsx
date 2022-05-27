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

    @media only screen and (max-width: 992px){
        padding: 0 2rem;
    }
`;

export const NavListUl = styled.ul`
    font-family: var(--font-ibm-plex-sans);
    display: flex;
    color: var(--gray);
    list-style: none;

    li {
        margin-left: 35px;
        cursor: pointer;
        font-size: 1.3rem;
        margin-right: 10px;

        a {
            transition: all ease-in-out 0.3s;

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

    @media only screen and (max-width: 992px) {
        display: none;
    }
`;