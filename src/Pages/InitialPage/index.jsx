import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'react-lottie';
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
    InfoSkillsParagraphP,
    ContactContainerFooter
} from './style.jsx'

import { CardProjects } from '../../Components/CardProjects/'
import { ScrollTop } from '../../Components/ScrollTop/'
import { CardSkills } from '../../Components/CardSkills/'
import { Footer } from '../../Sections/Footer/'

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

import developerAnimated from '../../Assets/animatedImages/develper.json'
import whoIAmAnimated from '../../Assets/animatedImages/whoiam.json'


export function InitialPage() {
    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
    }, [])

    const optionAnimatedHome = {
        loop: true,
        autoplay: true,
        animationData: developerAnimated,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const optionAnimatedWhoIAm = {
        loop: true,
        autoplay: true,
        animationData: whoIAmAnimated,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    

    return (
        <>
            <Header>
                <GridLayoutDiv>
                    <NavBarNav>
                        <h1 id="teste" data-aos="zoom-in">POWFOLIO</h1>
                        <NavListUl>
                            <li><Link to="whoAmI">Who am I?</Link></li>
                            <li><Link to="projects">Projects</Link></li>
                            <li><Link to="skills">Skills</Link></li>
                            <li><Link to="contact">Contact</Link></li>
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
                                    <HomeTextNameH1 data-aos="fade-right">
                                        Felipe Silva <span data-aos="fade" data-aos-delay="1000">.</span>
                                    </HomeTextNameH1>
                                    Front-end developer
                                </HomeTextDiv>
                            </HomeContainerTextDiv>
                            <HomeContainerImageDiv>
                                <Lottie options={optionAnimatedHome} width={ 500 } height={ 500 } data-aos="zoom-in"/>
                            </HomeContainerImageDiv>
                        </HomeDiv>
                    </GridLayoutDiv>
                </HomeSection>

                <WhoAmISection>
                    <GridLayoutDiv>
                        <WhoAmIContainerDiv>
                            <ImageWhoAmIDiv>
                                <Lottie options={optionAnimatedWhoIAm} width={ 400 } height={ 400 } data-aos="zoom-in"/>
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

                <ProjectsSection>
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

                <SkillsSection>
                    <GridLayoutDiv>
                        <SkillsContainerDiv>
                            <InfosSkillsArticle>
                                <InfoSkillsH1>Skills</InfoSkillsH1>
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