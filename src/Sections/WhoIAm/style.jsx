import styled from 'styled-components';

export const WhoAmIContainerDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const ImageWhoAmIDiv = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 1200px){
        display: none;
    }
`;

export const WhoAmITextDiv = styled.div`
    max-width: 590px;
`;

export const WhoAmINameH2 = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 1rem;

    span {
        font-size: 3rem;
        color: var(--purple-light);
        font-family: none;
    }

    @media only screen and (max-width: 1200px){
        text-align: center;
    }
`;

export const WhoAmINameP = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
    line-height: 1.8rem;

    @media only screen and (max-width: 1200px){
        text-align: center;
    }
`;