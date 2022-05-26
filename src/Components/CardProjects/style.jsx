import styled from 'styled-components';

export const ProjectsDiv = styled.div`
    width: 18rem;
    height: 12rem;
    border: 2px solid var(--border-separate);
    cursor: pointer;
    border-radius: 5px;
    transition: all 1s ease-in-out;

    &:hover {
        color: var(--purple-light);
        border: 2px solid var(--purple-light);
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