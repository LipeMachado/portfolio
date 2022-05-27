import styled from 'styled-components';

// ==================== HEADER AND NAVBAR SECTION ====================

export const Header = styled.header.attrs(() => ({
    className: 'home'
}))`
    font-family: var(--font-alata);
    width: 100%;
    background-color: var(--background);
    color: var(--white);
    border-bottom: 1px solid var(--border-separate);
`;

// ==================== MAIN SECTION ====================

export const Main = styled.main`
    color: var(--white);
`;

export const GridLayoutDiv = styled.div`
    max-width: 1180px;
    margin: 0 auto;
`;

// ==================== HOME SECTION ====================

export const HomeSection = styled.section`
    background-color: var(--background);
`;

// ==================== WHO AM I SECTION ====================

export const WhoIAmSection = styled.section.attrs(() => ({
    id: 'whoIAm'
}))`
    background-color: var(--background-light);
    padding: 96px 48px;
`;

// ==================== PROJECTS SECTION ====================

export const ProjectsSection = styled.section.attrs(() => ({
    id: 'projects'
}))`
    background-color: var(--background);
    display: flex;
    padding: 2rem 5rem 7rem 5rem;
    border-bottom: 1px solid var(--border-separate);

    @media only screen and (max-width: 425px){
        padding: 0 0 7rem 0;
    }
`;

// ==================== SKILLS SECTION ====================

export const SkillsSection = styled.section.attrs(() => ({
    id: 'skills'
}))`
    background-color: var(--background-light);
    padding: 96px 48px;
`;

// =================== CONTACT SECTION ====================

export const ContactContainerFooter = styled.footer.attrs(() => ({
    id: 'contact'
}))`
    font-family: var(--font-alata);
    padding: 96px 48px;
    background-color: var(--background-light);
    color: var(--white);
    border-top: 1px solid var(--border-separate);
`;

