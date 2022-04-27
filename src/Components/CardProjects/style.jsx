import styled from 'styled-components';

export const ProjectsDiv = styled.div`
    width: 18rem;
    height: 12rem;
    border: 2px solid transparent;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        color: var(--purple-light);
        border: 2px solid transparent;
        animation: animateProjects 0.7s linear forwards;
    }

    @keyframes animateProjects {
        0% {
            border-top-color: transparent;
            border-right-color: transparent;
            border-bottom-color: transparent;
            border-left-color: transparent;
        }

        25% {
            border-top-color: var(--purple-light);
            border-right-color: transparent;
            border-bottom-color: transparent;
            border-left-color: transparent;
        }
        
        50% {
            border-top-color: var(--purple-light);
            border-right-color: var(--purple-light);
            border-bottom-color: transparent;
            border-left-color: transparent;
        }

        75% {
            border-top-color: var(--purple-light);
            border-right-color: var(--purple-light);
            border-bottom-color: var(--purple-light);
            border-left-color: transparent;
        }

        100% {
            border-top-color: var(--purple-light);
            border-right-color: var(--purple-light);
            border-bottom-color: var(--purple-light);
            border-left-color: var(--purple-light);
        }
    }

    div {
        width: 18rem;
        height: 12rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--background-light);
        border-radius: 5px;

        img {
            width: 200px;
            border-radius: 5px;
        }
    }
`;