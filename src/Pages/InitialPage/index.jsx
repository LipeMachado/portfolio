import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { Link } from 'react-scroll';
import { List } from 'phosphor-react';

import {
    Header,
    NavBarNav,
    NavListUl,
    ListMenuIconContainerDiv,
    Main,
    HomeSection,
    GridLayoutDiv,
    HomeDiv,
    HomeContainerTextDiv,
    HomeTextDiv,
    HomeTextNameH1,
    HomeContainerImageDiv,
    WhoAmISection,
    WhoAmIContainerDiv,
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
    InfosSkillsArticle,
    CardSkillsContainerDiv,
    InfoSkillsH1,
    InfoSkillsParagraphP
} from './style.jsx'

import { CardProjects } from '../../Components/CardProjects/'
import { ScrollTop } from '../../Components/ScrollTop/'
import { CardSkills } from '../../Components/CardSkills/'

import whoIAm from '../../Assets/whoIAm.svg'
import nftCard from '../../Assets/nftCard.jpg'
import orderSummary from '../../Assets/orderSummary.jpg'
import profileCard from '../../Assets/profileCard.jpg'
import qrCode from '../../Assets/qrCode.jpg'
import statsPreview from '../../Assets/statsPreview.jpg'
import codarWebsite from '../../Assets/codarWebsite.jpeg'
import logoCss from '../../Assets/iconsSkills/logoCSS.svg'
import logoHtml from '../../Assets/iconsSkills/logoHTML.svg'
import logoJavaScript from '../../Assets/iconsSkills/logoJavaScript.svg'
import logoReactJs from '../../Assets/iconsSkills/logoReactJS.svg'
import logoPython from '../../Assets/iconsSkills/logoPython.svg'
import logoLess from '../../Assets/iconsSkills/logoLess.svg'
import logoStyledComponents from '../../Assets/iconsSkills/logoStyledComponents.svg'
import logoVueJs from '../../Assets/iconsSkills/logoVueJs.svg'

export function InitialPage() {

    // const animatedImage = useRef(null)

    // useEffect(() => {
    //     lottie.loadAnimation({
    //         animatedImage: animatedImage.current,
    //         renderer: 'svg',
    //         loop: true,
    //         autoplay: true,
    //         animationData: require('../../Assets/animatedImages/developer.json')
    //     })
    // }, [])

    return (
        <>
            <Header>
                <GridLayoutDiv>
                    <NavBarNav>
                        <h1 id="teste">LIPECODE</h1>
                        <NavListUl>
                            <li><Link to="whoAmI">Who am I?</Link></li>
                            <li><Link to="projects">Projects</Link></li>
                            <li><Link to="skills">Skills</Link></li>
                        </NavListUl>
                        <ListMenuIconContainerDiv>
                            <List size={32} />
                        </ListMenuIconContainerDiv>
                    </NavBarNav>
                </GridLayoutDiv>
            </Header>

            <Main>
                <HomeSection>
                    <GridLayoutDiv>
                        <HomeDiv>
                            <HomeContainerTextDiv>
                                <HomeTextDiv>
                                    Hi, I'm
                                    <br/>
                                    <HomeTextNameH1>
                                        Felipe Silva <span>.</span>
                                    </HomeTextNameH1>
                                    Front-end developer
                                </HomeTextDiv>
                            </HomeContainerTextDiv>
                            <HomeContainerImageDiv /*ref={animatedImage}*/>
                                UMA IMAGEM LEGAL VAI AQUI
                            </HomeContainerImageDiv>
                        </HomeDiv>
                    </GridLayoutDiv>
                </HomeSection>

                <WhoAmISection id="whoAmI">
                    <GridLayoutDiv>
                        <WhoAmIContainerDiv>
                            <ImageWhoAmIDiv>
                                <ImageWhoAmIImg src={whoIAm}/>
                            </ImageWhoAmIDiv>
                            <WhoAmITextDiv>
                                <WhoAmINameH2>Who I am <span>.</span></WhoAmINameH2>
                                <WhoAmINameP>
                                    Hi, my name is Felipe Silva. I'm a frontend developer.
                                    I develop responsive and minimalist websites.
                                </WhoAmINameP>
                            </WhoAmITextDiv>
                        </WhoAmIContainerDiv>
                    </GridLayoutDiv>
                </WhoAmISection>

                <ProjectsSection id="projects">
                    <GridLayoutDiv>
                        <ProjectsTitleH1>Projects <span>.</span></ProjectsTitleH1>
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
                        <SkillsContainerDiv>
                            <InfosSkillsArticle>
                                <InfoSkillsH1>Skills <span>.</span></InfoSkillsH1>
                                <InfoSkillsParagraphP>Hover the mouse cursor on the card to read</InfoSkillsParagraphP>
                            </InfosSkillsArticle>
                            <CardSkillsContainerDiv>
                                <CardSkills src={logoHtml} className={"html"}/>
                                <CardSkills src={logoCss} className={"css"}/>
                                <CardSkills src={logoJavaScript} className={"js"}/>
                                <CardSkills src={logoReactJs} className={"reactjs"}/>
                                <CardSkills src={logoVueJs} className={"vue"} />
                                <CardSkills src={logoLess} className={"less"} />
                                <CardSkills src={logoStyledComponents} className={"styledComponents"} />
                                <CardSkills src={logoPython} className={"python"} />
                            </CardSkillsContainerDiv>
                        </SkillsContainerDiv>
                    </GridLayoutDiv>
                </SkillsSection>
            </Main>
            <ScrollTop />
        </>
    );
}