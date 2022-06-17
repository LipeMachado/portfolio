import styled from 'styled-components';

export const ListMenuIconContainerDiv = styled.div`
    display: none;

    svg {
    
        &:hover {
            color: var(--purple-light);
            cursor: pointer;
        }
    }

    @media only screen and (max-width: 992px) {
        display: block;
    }
`;

export const MenuListContainerDiv = styled.div`
    position: absolute;
    top: 10.2vh;
    right: 0;
    width: 100vw;
    height: 90vh;
    z-index: 99;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--background);
`;

export const MenuListCloseIconDiv = styled.div`
    position: absolute;
    right: 32px;
`;

export const MenuListDiv = styled.div`
    font-size: 30px;
`;

export const MenuListItemsUl = styled.div`
    list-style: none;

    li {
        padding-bottom: 20px;
        padding-top: 15px;

        a {
            cursor: pointer;
            color: var(--gray);
        }
    }
`;