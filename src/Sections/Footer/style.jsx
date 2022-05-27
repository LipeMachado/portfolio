import styled from "styled-components";

export const ContactContainerDiv = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    height: auto;
`;

export const ContactContentDiv = styled.div`
    display: block;
`;

export const ContactLogosDiv = styled.div`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    a {
        padding: 10px;
        margin: 10px;
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
    display: flex;

    @media only screen and (max-width: 425px){
        display: block;
    }

    span {
        @media only screen and (max-width: 425px){
            display: none;
        }
    }

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