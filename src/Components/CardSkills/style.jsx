import styled from 'styled-components';

export const CardSkillsDiv = styled.div`
    width: 6rem;
    height: 6rem;
    border: 2px solid transparent;
    background-color: var(--background);
    border-radius: 5px;
    transition: all 0.6s ease 0s, opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 1.5s cubic-bezier(0.5, 0, 0, 1) 0s;

    &:hover {
        cursor: default;
        border: 2px solid var(--purple-light);
    }

    div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;

        img {
            width: 50px;
            border-radius: 5px;
        }
    }
`;