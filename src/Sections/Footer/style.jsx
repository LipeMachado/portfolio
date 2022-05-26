import styled from "styled-components";

export const ContactContainerDiv = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    height: auto;
`;

export const ImageContactDiv = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 1200px){
        display: none;
    }
`;

export const ContactTextDiv = styled.div`
    display: block;
`;

export const ContactLogosUl = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    li {
        padding: 10px;
        margin: 5px;
        border: 2px solid var(--border-separate);
        transition: all 0.5s ease-in-out;
        cursor: pointer;

        &:hover {
            border: 2px solid var(--white);
        }
    }
`;

export const ContactIndexsUl = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContactIndexsDiv = styled.div`
    max-width: 200px;

    li {
        padding: 5px;

        a {
            cursor: pointer;
            transition: all ease-in-out 0.3s;

            &:hover {
                color: var(--purple-light);
            }
        }
    }
`;