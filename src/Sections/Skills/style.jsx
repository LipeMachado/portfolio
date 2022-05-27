import styled from 'styled-components';

export const SkillsContainerDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    height: auto;
    padding: 8px;
`;

export const InfosSkillsArticle = styled.article`
    min-height: 300px;
    width: 35%;

    @media only screen and (max-width: 1200px) {
        width: 100%;
    }
`;

export const InfoSkillsH1 = styled.h1`
    margin-bottom: 10px;
    font-size: 2rem;
`;

export const InfoSkillsParagraphP = styled.p.attrs(() => ({
    className: 'changeInfos'
}))`
    max-width: 500px;
    line-height: 2rem;
    font-size: 1.2rem;
`;

export const CardSkillsContainerDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    @media only screen and (max-width: 1200px) {
        width: 100%;
        margin-top: 48px;
    }
`;