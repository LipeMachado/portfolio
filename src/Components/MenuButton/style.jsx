import styled from 'styled-components';

export const ListMenuMobileIconContainerDiv = styled.div`
    display: none;
    cursor: pointer;

    @media only screen and (max-width: 1200px) {
        display: block;
    }

    div {
        width: 32px;
        height: 1px;
        background-color: #fafafa;
        margin: 8px;
        transition: 0.4s;
    }

    &.active .line1 {
        transform: rotate(-45deg) translate(-8px, 8px);
    }
    
    &.active .line2 {
        opacity: 0;
    }

    &.active .line3 {
        transform: rotate(45deg) translate(-5px, -5px);
    }
`;

export const Line1Div = styled.div.attrs(() => ({
    className: 'line1'
}))``;

export const Line2Div = styled.div.attrs(() => ({
    className: 'line2'
}))``;

export const Line3Div = styled.div.attrs(() => ({
    className: 'line3'
}))``;

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
    cursor: pointer;
`;

export const MenuListDiv = styled.div`
    font-size: 30px;
`;

export const MenuListItemsUl = styled.div`
    list-style: none;

    li {
        padding-bottom: 20px;
        margin-top: 10px;

        a {
            cursor: pointer;
            color: var(--gray);
        }
    }
`;

export const MenuMobileLanguageLi = styled.span`
    width: 200px;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    color: var(--gray);

    span {
        cursor: pointer;
    }
`;