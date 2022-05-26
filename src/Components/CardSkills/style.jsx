import styled from 'styled-components';

export const CardSkillsArticle = styled.article`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 20%;
    flex-grow: 1;
    height: 100px;
    background-color: var(--background);
    position: relative;
    border: 2px solid var(--border-separate);
    transition: 1s all ease-in-out;
    

    &:hover {
        cursor: default;
        border: 2px solid var(--purple-light);
    }

    img {
        width: 60px;
        border-radius: 5px;
        height: auto;
        display: block;
    }

    @media only screen and (max-width: 768px){
        width: 40%;
        margin: 20px 0px;
    }
`;