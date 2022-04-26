import styled from 'styled-components';

export const ProjectsDiv = styled.div`
    width: 18rem;
    height: 12rem;
    border: 2px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--background-light);
    transition: all 0.5s;
    cursor: pointer;
    border-radius: 5px;

    img {
        width: 200px;
        border-radius: 5px;
    }

    &:hover {
       border: 2px solid var(--purple-light);
    }
`;