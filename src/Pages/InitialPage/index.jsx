import React from 'react';
import { Suspense } from 'react';
import { Link } from 'react-scroll';
import {
    Header,
    NavBarNav,
    NavListUl,
    Main,
    HomeSection,
    GridLayoutDiv,
    HomeDiv,
    HomeContainerTextDiv,
    HomeContainerImageDiv,
    HomeImageSvg,
    WhoAmISection,
    WhoAmIDiv,
    ImageWhoAmIDiv,
    ImageWhoAmIImg,
    WhoAmITextDiv,
    WhoAmINameH2,
    WhoAmINameP,
    ProjectsSection,
    ProjectsTitleH1,
    ProjectsContainerDiv,
    SkillsSection,
    SkillsContainerDiv,
    InfosSkillsDiv,
    CardSkillsContainerDiv
} from './style.jsx'

import { CardProjects } from '../../Components/CardProjects/'
import { ScrollTop } from '../../Components/ScrollTop/'
import { CardSkills } from '../../Components/CardSkills/'
import { AnimatedSphere } from '../../Components/AnimatedSphere/'
import { Canvas } from '@react-three/fiber'

import homeImage from '../../Images/homeImage.svg'
import whoIAm from '../../Images/whoIAm.svg'
import nftCard from '../../Images/nftCard.jpg'
import orderSummary from '../../Images/orderSummary.jpg'
import profileCard from '../../Images/profileCard.jpg'
import qrCode from '../../Images/qrCode.jpg'
import statsPreview from '../../Images/statsPreview.jpg'
import codarWebsite from '../../Images/codarWebsite.jpeg'

export function InitialPage() {
    return (
        <>
            <Header>
                <GridLayoutDiv>
                    <NavBarNav>
                        <h1>LIPECODE</h1>
                        <NavListUl>
                            <li><Link to="whoAmI">Who am I?</Link></li>
                            <li><Link to="projects">Projects</Link></li>
                            <li><Link to="skills">Skills</Link></li>
                        </NavListUl>
                    </NavBarNav>
                </GridLayoutDiv>
            </Header>

            <Main>
                <HomeSection>
                    <GridLayoutDiv>
                        <HomeDiv>
                            <HomeContainerTextDiv>
                                <h1>
                                    Hi, I'm
                                    <br/>
                                    <span className="homeName">
                                        Felipe Silva <span>.</span>
                                    </span>
                                    <br/>
                                    <span className="typeWriter">
                                        Front-end developer
                                    </span>
                                </h1>
                            </HomeContainerTextDiv>
                            <HomeContainerImageDiv>
                                <Canvas>
                                    <ambientLight intensity={0.5} />
                                    <directionalLight position={[-2, 5, 2]} />
                                    <Suspense fallback={null}>
                                        <AnimatedSphere />
                                    </Suspense>
                                </Canvas>
                            </HomeContainerImageDiv>
                        </HomeDiv>
                    </GridLayoutDiv>
                </HomeSection>

                <WhoAmISection id="whoAmI">
                    <GridLayoutDiv>
                        <WhoAmIDiv>
                            <ImageWhoAmIDiv>
                                <ImageWhoAmIImg src={whoIAm}/>
                            </ImageWhoAmIDiv>
                            <WhoAmITextDiv>
                                <WhoAmINameH2>Felipe Silva <span>.</span></WhoAmINameH2>
                                <WhoAmINameP>
                                    Hi, my name is Felipe Silva. I'm a frontend developer.
                                    I develop responsive and minimalist websites.
                                </WhoAmINameP>
                            </WhoAmITextDiv>
                        </WhoAmIDiv>
                    </GridLayoutDiv>
                </WhoAmISection>

                <ProjectsSection id="projects">
                    <GridLayoutDiv>
                        <ProjectsTitleH1>Projects</ProjectsTitleH1>
                        <ProjectsContainerDiv>
                            <CardProjects src={nftCard} href={"https://github.com/LipeMachado/nftCard-Challenge"}/>
                            <CardProjects src={orderSummary} href={"https://github.com/LipeMachado/orderSummary-Challenge"} />
                            <CardProjects src={profileCard} href={"https://github.com/LipeMachado/profileCard-Challenge"} />
                            <CardProjects src={qrCode} href={"https://github.com/LipeMachado/qrCode-Challenge"} />
                            <CardProjects src={statsPreview} href={"https://github.com/LipeMachado/statsPreview-Challenge"} />
                            <CardProjects src={codarWebsite} href={"https://github.com/LipeMachado/codar-Challenge"} />
                        </ProjectsContainerDiv>
                    </GridLayoutDiv>
                </ProjectsSection>

                <SkillsSection id="skills">
                    <GridLayoutDiv>
                        <SkillsContainerDiv style={{ display: 'flex'}}>
                            <InfosSkillsDiv>
                                imagem e texto sobre a skill
                            </InfosSkillsDiv>
                            <CardSkillsContainerDiv>
                                <CardSkills />
                                cards das skills
                            </CardSkillsContainerDiv>
                        </SkillsContainerDiv>
                    </GridLayoutDiv>
                </SkillsSection>
            </Main>
            <ScrollTop />
        </>
    );
}