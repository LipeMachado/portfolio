import React from 'react';
import Lottie from 'react-lottie';
import TypeAnimation from 'react-type-animation';
import { 
    HomeDiv,
    HomeContainerTextDiv,
    HomeTextDiv,
    HomeContainerImageDiv
} from './style.jsx';

import { i18n } from '../../translate/i18n'

import developerAnimated from '../../Assets/animatedImages/developer.json'

export function Home() {

    const optionAnimatedHome = {
        loop: true,
        autoplay: true,
        animationData: developerAnimated,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }; 

    return (
        <HomeDiv>
            <HomeContainerTextDiv>
                <HomeTextDiv>
                    {i18n.t('home.homeHello')}
                    <br />
                    <TypeAnimation
                        cursor={false}
                        sequence={['Felipe Silva Machado', 2000]}
                        wrapper="h1"
                        repeat={1}
                    />
                    {i18n.t('home.homeFrontEnd')}
                </HomeTextDiv>
            </HomeContainerTextDiv>
            <HomeContainerImageDiv data-aos="zoom-in-left">
                <Lottie options={optionAnimatedHome} width={ 500 } height={ 500 } data-aos="zoom-in"/>
            </HomeContainerImageDiv>
        </HomeDiv>
    );
}