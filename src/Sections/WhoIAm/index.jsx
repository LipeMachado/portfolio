import React from 'react';
import Lottie from 'react-lottie';
import {
    WhoAmIContainerDiv,
    ImageWhoAmIDiv,
    WhoAmITextDiv,
    WhoAmINameH2,
    WhoAmINameP
} from './style.jsx';

import whoIAmAnimated from '../../Assets/animatedImages/whoiam.json'

export function WhoIAm() {

    const optionAnimatedWhoIAm = {
        loop: true,
        autoplay: true,
        animationData: whoIAmAnimated,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
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
    );
}