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
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--background-transparent);
    z-index: 1;
`;

export const MenuListCloseIconDiv = styled.div`
    position: absolute;
    top: 17px;
    right: 32px;
`;

export const MenuListDiv = styled.div`
    font-size: 35px;
`;

export const MenuListItemsUl = styled.div`
    list-style: none;

    li {
        padding-bottom: 20px;
        padding-top: 20px;

        a {
            cursor: pointer;
        }
    }
`;