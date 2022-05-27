import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import {
    Header,
    Main,
    HomeSection,
    GridLayoutDiv,
    WhoIAmSection,
    ProjectsSection,
    SkillsSection,
    ContactContainerFooter
} from './style.jsx'

import { ScrollTop } from '../../Components/ScrollTop/'

import { NavBar } from '../../Sections/NavBar/'
import { Home } from '../../Sections/Home/'
import { WhoIAm } from '../../Sections/WhoIAm/'
import { Projects } from '../../Sections/Projects/'
import { Skills } from '../../Sections/Skills/'
import { Footer } from '../../Sections/Footer/'

export function InitialPage() {
    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
    }, [])   

    return (
        <>
            <Header>
                <GridLayoutDiv>
                    <NavBar />
                </GridLayoutDiv>
            </Header>

            <Main>
                <HomeSection>
                    <GridLayoutDiv>
                        <Home />
                    </GridLayoutDiv>
                </HomeSection>

                <WhoIAmSection>
                    <GridLayoutDiv>
                        <WhoIAm />
                    </GridLayoutDiv>
                </WhoIAmSection>

                <ProjectsSection>
                    <GridLayoutDiv>
                        <Projects />
                    </GridLayoutDiv>
                </ProjectsSection>

                <SkillsSection>
                    <GridLayoutDiv>
                        <Skills />
                    </GridLayoutDiv>
                </SkillsSection>

                <ContactContainerFooter>
                    <GridLayoutDiv>
                        <Footer />
                    </GridLayoutDiv>
                </ContactContainerFooter>

            </Main>

            <ScrollTop />
        </>
    );
}