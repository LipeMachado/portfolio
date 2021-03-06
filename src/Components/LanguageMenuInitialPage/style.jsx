import styled from 'styled-components';

export const LanguageMenuDiv = styled.div`
    width: 200px;
    height: 50px;
    top: 50px;
    right: -85px;
    position: absolute;
    display: none;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--background-transparent);
    transition: all 0.3s ease-in-out;

    span {
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
            color: var(--purple-light);
        }
    }

    &.active {
        display: flex;
    }
`;