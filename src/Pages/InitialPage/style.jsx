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

export const NavBarNav = styled.nav`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: var(--white);
        letter-spacing: 6px;
        cursor: default;
    }

    @media only screen and (max-width: 992px){
        padding: 0 2rem;
    }
`;

export const NavListUl = styled.ul`
    font-family: var(--font-ibm-plex-sans);
    display: flex;
    color: var(--gray);
    list-style: none;

    li {
        margin-left: 35px;
        cursor: pointer;
        font-size: 1.3rem;
        margin-right: 10px;

        a {
            transition: all ease-in-out 0.3s;

            &:hover {
                color: var(--purple-light);
            }

            &::after {
                display: block;
                width: 0;
                content: "";
                border: 2px solid transparent;
            }   

            &:hover::after {
                animation: animate 0.3s linear forwards;
            }

            @keyframes animate {
                0% {
                    width: 0;
                    border-top-color: transparent;
                }

                50% {
                    width: 50%;
                    border-top-color: var(--purple-light);
                }
            
                100% {
                    width: 100%;
                    border-top-color: var(--purple-light);
                }
            }
        }
    }

    @media only screen and (max-width: 992px) {
        display: none;
    }
`;

export const ListMenuIconContainerDiv = styled.div`
    display: none;

    svg {
    
        &:hover {
            color: green;
            cursor: pointer;
        }
    }

    @media only screen and (max-width: 992px) {
        display: block;
    }
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

export const HomeDiv = styled.div`
    height: 80vh;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    
    @media only screen and (max-width: 992px){
        display: flex;
        justify-content: center;
        text-align: center;
    }
`;

export const HomeContainerTextDiv = styled.div`
    width: 50%;

    @media only screen and (max-width: 992px){
        width: 100%;
    }
`;

export const HomeTextDiv = styled.div`
    font-size: 2rem;
    font-weight: 400;

    span {
        font-size: 3rem;
        color: var(--purple-light);
        font-family: none;
    }
`;

export const HomeTextNameH1 = styled.h1`
    font-family: var(--font-ibm-plex-sans);
`;

export const HomeContainerImageDiv = styled.div.attrs(() => ({
    className: 'animatedImage'
}))`
    @media only screen and (max-width: 992px){
        display: none;
    }
`;

export const HomeImageSvg = styled.img`
    transition: all 0.8s;

    &:hover {
        transform: scale(1.05);
    }
`;

// ==================== WHO AM I SECTION ====================

export const WhoAmISection = styled.section.attrs(() => ({
    id: 'whoAmI'
}))`
    background-color: var(--background-light);
    padding: 96px 48px;
`;

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
    max-width: 500px;
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

    @media only screen and (max-width: 1200px){
        text-align: center;
    }
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

export const ProjectsTitleH1 = styled.h1`
    text-align: center;
    margin-bottom: 3.5rem;
    margin-top: 3.5rem;
    font-size: 2rem;
`;

export const ProjectsContainerDiv = styled.div`
    display: flex;
    gap: 45px;
    flex-wrap: wrap;
    justify-content: center;
`;

// ==================== SKILLS SECTION ====================

export const SkillsSection = styled.section.attrs(() => ({
    id: 'skills'
}))`
    background-color: var(--background-light);
    padding: 96px 48px;
`;

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

