import React from 'react';
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
    WhoAmIDiv
} from './style.jsx'

import homeImage from '../../Images/homeImage.svg'

export function InitialPage() {
    return (
        <>
            <Header>
                <GridLayoutDiv>
                    <NavBarNav>
                        <h1>POWFOLIO</h1>
                        <NavListUl>
                            <li><a>Who am I?</a></li>
                            <li><a>Projects</a></li>
                            <li><a>Skills</a></li>
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
                                        Felipe Silva.
                                    </span>
                                    <br/>
                                    <span className="typeWriter">
                                        Front-end developer
                                    </span>
                                </h1>
                            </HomeContainerTextDiv>
                            <HomeContainerImageDiv>
                                <HomeImageSvg src={homeImage}/>
                            </HomeContainerImageDiv>
                        </HomeDiv>
                    </GridLayoutDiv>
                </HomeSection>

                <WhoAmISection>
                    <GridLayoutDiv>
                        <WhoAmIDiv>
                            
                        </WhoAmIDiv>
                    </GridLayoutDiv>
                </WhoAmISection>
            </Main>
        </>
    );
}